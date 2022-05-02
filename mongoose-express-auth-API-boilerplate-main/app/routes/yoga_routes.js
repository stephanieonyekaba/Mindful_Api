// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for yogas
const Yoga = require('../models/yoga')
const User = require('../models/user')
// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { yoga: { title: '', text: 'foo' } } -> { yoga: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /yogas
router.get('/yogas', (req, res, next) => {
	Yoga.find()
		.then((yogas) => {
			// `yogas` will be an array of Mongoose documents
			// we want to convert each one to a POJO, so we use `.map` to
			// apply `.toObject` to each one
			return yogas.map((yoga) => yoga.toObject())
		})
		// respond with status 200 and JSON of the yogas
		.then((yogas) => res.status(200).json({ yogas: yogas }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// SHOW
// GET /yogas/5a7db6c74d55bc51bdf39793
router.get('/yogas/:id', (req, res, next) => {
	// req.params.id will be set based on the `:id` in the route
	Yoga.findById(req.params.id)
		.then(handle404)
		// if `findById` is succesful, respond with 200 and "yoga" JSON
		.then((yoga) => res.status(200).json({ yoga: yoga.toObject() }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// CREATE
// POST /yogas
router.post('/yoga/favorites/:id', requireToken, (req, res, next) => {
	const yoga = req.params.id
	console.log(yoga)
	//getting our user id
	const userId = req.user.id; 
	User.findById(user)
			.then(handle404)
			.then((user) => {
				//here we are pushing each yoga id into the favoriteYoga array
				//we use the user.favoriteYoga syntax because it refers to the model in user(the schema for favoriteYoga has an empty array)
				console.log("IS THIS WORKING??", favoriteYogas)
				user.favoriteYogas.push(yoga)
				return user.save();
			})
})

// UPDATE
// PATCH /yogas/5a7db6c74d55bc51bdf39793
router.patch('/yogas/:id', requireToken, removeBlanks, (req, res, next) => {
	// if the client attempts to change the `owner` property by including a new
	// owner, prevent that by deleting that key/value pair
	delete req.body.yoga.owner

	Yoga.findById(req.params.id)
		.then(handle404)
		.then((yoga) => {
			// pass the `req` object and the Mongoose record to `requireOwnership`
			// it will throw an error if the current user isn't the owner
			requireOwnership(req, yoga)

			// pass the result of Mongoose's `.update` to the next `.then`
			return yoga.updateOne(req.body.yoga)
		})
		// if that succeeded, return 204 and no JSON
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// DESTROY
// DELETE /yoga/5a7db6c74d55bc51bdf39793
router.delete('/yogas/:id', requireToken, (req, res, next) => {
	Yoga.findById(req.params.id)
		.then(handle404)
		.then((yoga) => {
			// throw an error if current user doesn't own `yoga`
			requireOwnership(req, yoga)
			// delete the yoga ONLY IF the above didn't throw
			yoga.deleteOne()
		})
		// send back 204 and no content if the deletion succeeded
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})

module.exports = router