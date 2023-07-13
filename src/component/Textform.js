import React, { useState } from 'react'

export default function Textform(props) {
    const handleOnClick=()=>{
       
       let newtext = text.toLocaleUpperCase();
       setText(newtext);
    }

    const handleOfClick=()=>{
       
        let newtext = text.toLocaleLowerCase();
        setText(newtext);
     }

     const cleartext = ()=>{
        let newtext = "";
        setText(newtext)
     }

    const handleOnChange=(event)=>{
        
        setText(event.target.value);
     }
    const [text, setText] = useState("enter your text here");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="exampleFormControlTextarea1"  className="form-label" >{props.summ} - {text}</label> */}
                    <textarea className="form-control" id="exampleFormControlTextarea1"value={text} rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleOnClick}>Upper Case</button>
                <button className="btn btn-primary mx-3" onClick={handleOfClick}>Lower Case</button>
                <button className="btn btn-primary mx-3" onClick={cleartext}>clear</button>
            </div>
            <div className="container">
                <h2>summary</h2>
                <p>you have {text.split(" ").length}.length words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} minute read</p>
                <h3>preview</h3>
                <p>{text.length>0?text:"enter in box to preview"}</p>


            </div>
        </>
    )
}
