import {React} from 'react';
import {useState } from 'react';
import './Book.css';
import Axios from 'axios';


function Book(){

    const [trainname1,setTrainName]=useState("")
    const[from1,setFrom]=useState("")
    const[to1,setTo]=useState("")
    const[date1,setDate]=useState("")
    const[time1,setTime]=useState("")
    const[seatclass1,setSeatClass]=useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        
        Axios.post('http://localhost:4000/insert', {
        trainname: trainname1,
        starting:from1,
        destination:to1,
        date:date1,
        time:time1,
        seatclass:seatclass1
        })
        }

        return(
<form onSubmit={handleSubmit}>

<div class="signup-form bg-dark">

    <div class="Signup-head bg-warning">
        <h1>Add the  Train</h1>
    </div>


    <div class="signup-content2">
    <label class="text-white" style={{marginLeft:'10px'}}>Train Name</label>
    <input className='TrainName' 

    onChange={(e) => {setTrainName(e.target.value)}}


    type="text" placeholder="Name" 
    class="input bg-dark"/><br/>
    <label class="text-white" style={{marginLeft:'10px' ,marginRight:'30px'}}>Starting</label>
        <input 
        
        className='From'
        onChange={(e) => {setFrom(e.target.value)}}
        type="text" 
        
            
        placeholder="From" class="input bg-dark"/>
    <label class="text-white" style={{marginLeft:'10px'}}>Destination</label>
        <input 
        
        className='To'
        onChange={(e) => {setTo(e.target.value)}}
        type="text" placeholder="To" class="input bg-dark"/><br/>
    

    <label class="text-white" style={{marginLeft:'10px' ,marginRight:'50px'}}>Date</label>
    <input 
    
    className='Date'
    onChange={(e) => {setDate(e.target.value)}}
    type="date" class="tarikh bg-dark text-white"/><br/>
    <label class="text-white" style={{marginLeft:'10px', marginRight:'50px'}}>Time</label>
    <input 
    
    className='Time'
    onChange={(e) => {setTime(e.target.value)}}
    type="time" class="tarikh bg-dark"/><br/>


<label class="text-white" style={{marginLeft:'10px', marginRight:'15px'}}>Seat Class</label>
    <input 
    
    className='SeatClass'
    onChange={(e) => {setSeatClass(e.target.value)}}
    type="text" class="tarikh bg-dark"/><br/>
{/* 
    <input type="number" class="bg-dark person" placeholder="Adults"/>
    <input type="number" class="bg-dark person" placeholder="Children"/><br/> */}

    {/* <label class="text-white travel" style={{marginLeft:'10px', marginRight:'15px'}}>Seat Class</label>
    <select class="bg-dark text-white travel2">
        <option></option>
        <option>First Class/1A</option>
        <option>AC 2tier/2A</option>
        <option>AC 3tier/3A</option>
        <option>Executive class chair car/Economy Class</option>
        <option>AC Chair Car</option>
        <option>Sleeper Class</option>
        <option>Second Class</option>
        <option>General</option>
    </select> */}

    <button type="submit" class="submit-btn bg-warning">Add Train</button>
</div>
</div>
</form>
        )
    }

export default Book;