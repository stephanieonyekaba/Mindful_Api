const mongoose = require('mongoose')
const { Schema, model } = mongoose
const journalSchema = new mongoose.Schema(
	{
        date: {
			type: Date,
			required: true,
		},
        entry: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'

		},
	},
	{
	timestamps: true,
	}
	)

module.exports = mongoose.model('Journal', journalSchema)
