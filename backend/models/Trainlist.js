const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainlistSchema = new Schema({
	Trainname: {
		type: String,
		required: true
	},
	Starting:
	{
		type:String,
		required: true
	},
	Destination:
	{
		type:String,
		required: true
	},
	Date:
	{
		type:Date,
		required:true
	},
	Time:
	{
		type:String,
		required:true
	},
	Seatclass:
	{
		type:String,
		required:true
	}
	// complete: {
	// 	type: Boolean,
	// 	default: false
	// },
	// timestamp: {
	// 	type: String,
	// 	default: Date.now()
	// }
});

const Trainlist = mongoose.model("Trainlist", TrainlistSchema);

module.exports = Trainlist;