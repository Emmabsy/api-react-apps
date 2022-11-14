import { useState, useEffect } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

const CatFact = () => {
    const [catFact, setCatFact]=useState("");

    const fetchCatFact = ()=>{
         Axios.get("https://catfact.ninja/fact").then((res)=>{
              setCatFact(res.data.fact);
        });
    };

    useEffect(()=>{
        fetchCatFact();
    }, []);

  return (
    <div>
      
        <h4 className="title" style={{color:"red"}}> 1. Cat Facts </h4>
        <Button variant ="info"on onClick={fetchCatFact}> Generate Cat Fact</Button>
        <br/>
        <p> {catFact} </p>
    </div>
  )
}

export default CatFact