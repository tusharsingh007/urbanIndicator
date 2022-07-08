import React from 'react'
import Map from './Map';
import Legend from './Legend';
// import background from "./Earth.jpg";


export default function TextForm(props) {
    
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <Map/>
            <Legend/>
          
           
        </div>
        </>
    )
}