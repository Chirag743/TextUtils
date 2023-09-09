import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        // setText("You have clicked on handleOnClick");
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked");
        // setText("You have clicked on handleOnClick");
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "New Text"; // Wrong way to change the state
    // setText("New Text");  // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To Lowercase</button>
        </div>
        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
