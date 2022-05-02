const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		favoriteYogas: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Yoga",
            required: false
        }],
		hashedPassword: {
			type: String,
			required: true,
		},
		token: String,
	},
	{
		timestamps: true,
		toObject: {
			// remove `hashedPassword` field when we call `.toObject`
			transform: (_doc, user) => {
				delete user.hashedPassword
				return user
			},
		},
	}
)

module.exports = mongoose.model('User', userSchema)









// {outfit.comments.map((comment) => (
// 	comment?.author === user?._id ?
// 		(<Card>
// 			<Card.Title><strong>{comment?.name}</strong></Card.Title>
// 			<Card.Body className="show-page-card">
// 				<p>{comment?.note}</p>
// 				<p>Date: <Moment format="MMMM DD, YYYY">{comment?.date}</Moment></p>
// 			</Card.Body>
// 			<Card.Footer>
// 				<Button onClick={() => removeTheComment(outfit?._id, comment?._id)}>Delete</Button>
// 			</Card.Footer>
// 		</Card>)
// 		:
// 		(<Card>
// 			<Card.Title><strong>{comment.name}</strong></Card.Title>
// 			<Card.Body className="show-page-card">
// 				<p>{comment.note}</p>
// 				<p>Date: <Moment format="MMMM DD, YYYY">{comment.date}</Moment></p>
// 			</Card.Body>
// 		</Card>)
// ))}
