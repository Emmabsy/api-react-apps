import { useState} from "react";
import Axios from "axios";
import {Button, Stack} from 'react-bootstrap';

const PredictAge = () => {
    const [name, setName] =useState("");
    const [PredictedAge, setPredictedAge]=useState(null);


    const fetchData = () => {
         Axios.get(`https://api.agify.io/?name= ${name}`).then((res) => {
            setPredictedAge(res.data)
         });
    };


  return (
    <div>
        <br/>
         <h4 className="title" style={{color:"Blue"}}> 2. Predicting Age </h4>
        <Stack direction="horizontal" gap={3} className="col-md-3 mx-auto" >
          <input placeholder="Ex. Emma" onChange={(event)=> {setName(event.target.value)}}/> 
           
          <Button variant ="warning" onClick={fetchData}> Predict Age</Button>

        </Stack>
        
        <p> Name: {PredictedAge?.name} </p>
        <p> Count: {PredictedAge?.count} </p>
        <p> Age: {PredictedAge?.age} </p>

    </div>
  )
}

export default PredictAge