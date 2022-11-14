import { useState} from "react";
import Axios from "axios";
import {Button, Stack} from 'react-bootstrap';

const Excuser = () => {
    const [generatedExcuse, setGeneratedExcuse] =useState("");
   
   
    const fetchExcuse =(excuse) =>{
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
            setGeneratedExcuse(res.data[0].excuse)
         });

    }


  return (
    <div>
        <br/>
         <h4 className="title" style={{color:"Green"}}> 3. I have an Excuse </h4>

        <Stack direction="horizontal" gap={3} className="col-md-3 mx-auto">
            <Button variant="primary" onClick={() => fetchExcuse ("family")}> Family</Button>
            <div className="vr" />
            <Button variant="success "onClick={() => fetchExcuse ("party")}> Party</Button>
            <div className="vr" />
            <Button variant="secondary"onClick={() => fetchExcuse ("office")}> Office </Button>
        </Stack> 
        <br/>
         

         <p>{generatedExcuse} </p>
         
    </div>
  )
}

export default Excuser