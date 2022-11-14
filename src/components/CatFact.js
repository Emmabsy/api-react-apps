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
      
        <h3 className="title" style={{color:"red"}}> 1. Cat Facts </h3>
        <Button variant ="info"on onClick={fetchCatFact}> Generate Cat Fact</Button>
        <p> {catFact} </p>
    </div>
  )
}

export default CatFact