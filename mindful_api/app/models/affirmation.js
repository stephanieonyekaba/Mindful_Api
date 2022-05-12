const mongoose = require('mongoose')
const { Schema, model } = mongoose
const affirmationSchema = new mongoose.Schema(
	{
        mantra: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: false,
		},
	},
	{
	timestamps: true,
	}
	)

module.exports = mongoose.model('Affirmation', affirmationSchema)
