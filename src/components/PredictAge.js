import { useState} from "react";
import Axios from "axios";
import {Button} from 'react-bootstrap';

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
         <h3 className="title" style={{color:"Blue"}}> 2. Predicting Age </h3>
        <input placeholder="Ex. Emma" onChange={(event)=> {setName(event.target.value)}}/>

        <Button variant ="warning" onClick={fetchData}> Predict Age</Button>
        <h3> Age: {PredictedAge?.age} </h3>
        <h3> Count: {PredictedAge?.count} </h3>
        <h3> name: {PredictedAge?.name} </h3>

    </div>
  )
}

export default PredictAge