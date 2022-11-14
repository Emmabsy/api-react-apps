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
         <h3 className="title" style={{color:"Green"}}> 3. I have an Excuse </h3>

        <Stack gap={2} className="col-md-1 mx-auto">
            <Button variant="primary" onClick={() => fetchExcuse ("family")}> Family</Button>
            <Button variant="success "onClick={() => fetchExcuse ("party")}> Party</Button>
            <Button variant="secondary"onClick={() => fetchExcuse ("office")}> Office </Button>
        </Stack> 
         

         <p>{generatedExcuse} </p>
         
    </div>
  )
}

export default Excuser