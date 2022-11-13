import React, { useState } from 'react'

export default function Textform(props) {
    
    const handleUpClick = () => {
        // console.log("Upper case was clicked  " + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick = () => {
        // console.log("Upper case was clicked  " + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClearClick = () => {
        // console.log("Textclear was clicked  " + text);
        let newText='';
        setText(newText);
        props.showAlert("Cleared Text","success")
    }
    const handleExtraSpace = () => {
        // console.log("handle extraspace was clicked  " + text);
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Cleared Extra Space in Text","success")
    }
    const speak = () => {
        // console.log("Speak was clicked  " + text);
        let msg= new SpeechSynthesisUtterance();
        msg.text=text;
        speechSynthesis.speak(msg);
        props.showAlert("Read the Text","success")
        }

    // const emailExtract = () => {
    //     // console.log("Email_Extract was clicked  " + text);
    //     let newText=text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    //         setText(newText);
    //     }
    const handleOnChange = (event) => {
        console.log("OnChange ");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    //text="new text" // Wrong way to change the state
    // setText("new text")   //Correct way to change the state
    return (
        <>
        <div className='container'style={{color:props.mode ==='dark'?'white':'#253644'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">Example TextArea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#444c54':'white',color:props.mode ==='dark'?'white':'#253644'}} id="myBox" rows="8" placeholder='Enter the Text here'></textarea>
            </div>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={speak}>Speak Text</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Clear Extra Space</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            {/* <button className="btn btn-primary mx-1" onClick={emailExtract}>Extract Email</button> */}
        </div>
        <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#253644'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read</p>
            <h2>Preview</h2>
            {/* 0.008 minutes is taken to read one word */}
            <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
        </div>
        </>
    )
}