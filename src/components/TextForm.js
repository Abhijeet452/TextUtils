import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        if (text.length === 0) {
            props.showAlert("Enter Some Text First", "danger");
        }
        else {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Upper Case", "success");
        }
    }
    const handleLoClick = () => {
        if (text.length === 0) {
            props.showAlert("Enter Some Text First", "danger");
        }
        else {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lower Case", "success");
        }

    }
    const handleOnClear = () => {
        if (text.length === 0) {
            props.showAlert("TextBox is Empty", "warning");
        }
        else {
            let newText = '';
            setText(newText);
            props.showAlert("Text Cleared", "success");
        }
    }
    const handleOnCopy = () => {
        if (text.length === 0) {
            props.showAlert("Nothing to copy", "danger");
        }
        else {
            navigator.clipboard.writeText(text);
            props.showAlert("Copied Text", "success");
        }
    }
    const handleOnExtraSpaces = () => {
        if (text.length === 0) {
            props.showAlert("Enter Some Text First", "danger");
        }
        else {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Removed Extra Spaces", "success");
        }

    }
    let wordCount=text.split(/\s+/).filter((element)=>{ return element.length!==0}).length;

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    let senscount = sens();
    function sens() {
        let sensctr = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === '.') {
                sensctr++;
            }
        }
        return sensctr;
    }
    let mystls = {
        backgroundColor: props.mode === 'dark' ? 'rgb(255 255 255 / 15%)' : 'rgb(222 222 222)',
        color: props.mode === 'dark' ? 'White' : 'Black'
    };
    const dis=()=>{
        return text.length===0;
    }
    return (
        <>
            <div className="container">
                <h2 className="mb-4">{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={mystls}></textarea>
                </div>
                <div className="d-flex justify-content-center flex-column">
                    <button disabled={dis()} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button disabled={dis()} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
                    <button disabled={dis()} className="btn btn-primary my-2 mx-2" onClick={handleOnClear}>Clear Text</button>
                    <button disabled={dis()} className="btn btn-primary my-2 mx-2" onClick={handleOnCopy}>Copy Text</button>
                    <button disabled={dis()} className="btn btn-primary my-2 mx-2" onClick={handleOnExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Text Summary</h1>
                <h4>{text.length} characters {wordCount} words {senscount} sentences {(text.split(' ').filter((element)=>{return element.length!==0}).length) / 125} minutes read</h4>
                <h2>Preview</h2>
                <h5>{text.length > 0 ? text : "Enter Some Text above to preview here :)"}</h5>
            </div>
        </>
    )
}
