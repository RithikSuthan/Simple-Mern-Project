const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Trainlist = require('./models/Trainlist')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://Rithik_Suthan_S:8098329762@cluster0.nwyrzl2.mongodb.net/train?retryWrites=true&w=majority' , {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);


app.post('/insert',async(req,res)=>
{
	const trainname=req.body.trainname;
	const starting=req.body.starting;
	const destination=req.body.destination;
	const date=req.body.date;
	const time=req.body.time;
	const seatclass=req.body.seatclass;

	const formData = new Trainlist({
		Trainname: trainname,
		Starting:starting,
		Destination:destination,
		Date:date,
		Time:time,
		Seatclass:seatclass
		})

		try {
			await formData.save();
			res.send("inserted data..")
			} catch(err) {
			console.log(err)
			}
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
console.log(`Server started on port ${port}`);
});


