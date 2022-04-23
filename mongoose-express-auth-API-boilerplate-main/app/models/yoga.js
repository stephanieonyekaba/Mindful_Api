const mongoose = require('mongoose')
const { Schema, model } = mongoose
const yogaSchema = new mongoose.Schema(
	{
        sanskrit_name: {
			type: String,
			required: true,
		},
		english_name: {
			type: String,
			required: true,
		},
		img_url: {
            type: String,
            required: true
        },
        pose_benefits: {
            type: String,
            required: true
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
module.exports = mongoose.model('Yoga', yogaSchema)
