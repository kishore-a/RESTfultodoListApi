const newLocal = 'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TaskSchema = new Schema({
	name: {
		type: String,
		required: 'Kind Enter the name of task'

	},
	Created_data: {
		type: Date,
		default: Date.now,
	},
	status: {
		type: [{
			type: String,
			enum: ['pending', 'ongoing', 'completed']
		}],
		default: ['pending']
	}

})

module.exports = mongoose.model('Tasks', TaskSchema)