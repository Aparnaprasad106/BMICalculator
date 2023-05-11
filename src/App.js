import { Button, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [height,setHeight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [bmi,setBmi] = useState(0)
  const [message,setMessage] = useState('')

 const calcBmi = (event)=>{
  // prevent submitting
  event.preventDefault()
  
  if(weight==0 || height==0)
  {
    console.log('Please enter a valid height and weight');
  }
  else{
    let bmi = (weight / (height * height))
    setBmi(bmi)

    // message logic
    if(bmi<25)
    {
      setMessage('You are Underweight')
    }
    else if(bmi>25 && bmi<30){
      setMessage('You are healthy weight')
    }
    else{
      setMessage('You are overweight')
    }
  }
 }

//  reset

const reset = (event)=>{
  setHeight(0)
  setMessage('')
  setWeight(0)
  setBmi('')
}

  return (
    <div className="app">
      <div className="container">
        <h2 className='center'>BMI CALCULATOR</h2>
        <form>
          <div className="weight">
            <TextField id="outlined-basic" value={weight || ""} onChange={e=>setWeight(e.target.value)} label="Weight (Kg)" variant="outlined" />
          </div>
          <div className="height">
            <TextField id="outlined-basic" value={height || ""} onChange={e=>setHeight(e.target.value)} label="height (m)" variant="outlined" />
          </div>
           <div className="button">
           <button className='btn' onClick={calcBmi}   variant="contained">Calculate</button>
           </div>
           <div className="button">
           <button className='btn' onClick={reset}   variant="contained">Reset</button>
           </div>
        </form>
        <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p className='message'>{message}</p>
      </div>
      </div>
    </div>
  );
}

export default App;
