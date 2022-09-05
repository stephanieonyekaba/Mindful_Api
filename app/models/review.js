const mongoose = require('mongoose')
const { Schema, model } = mongoose
const reviewSchema = new mongoose.Schema(
	{
        img_url: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
        quote: {
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
module.exports = mongoose.model('Review', reviewSchema)
