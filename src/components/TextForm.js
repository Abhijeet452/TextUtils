import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if (text.length === 0) {
            props.showAlert("Enter Some Text First", "danger");
        }
        else {
            props.showAlert("Converted to Upper Case", "success");
        }
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (text.length === 0) {
            props.showAlert("Enter Some Text First", "danger");
        }
        else {
            props.showAlert("Converted to Lower Case", "success");
        }

    }
    const handleOnClear = () => {
        let newText = '';
        setText(newText);
        if (text.length === 0) {
            props.showAlert("TextBox is Empty", "warning");
        }
        else {
            props.showAlert("Text Cleared", "success");
        }
    }
    const handleOnCopy = () => {
        if (text.length === 0) {
            props.showAlert("Nothing to copy", "danger");
        }
        else {
            let newText = document.getElementById("myBox");
            newText.select();
            navigator.clipboard.writeText(newText.value);
            props.showAlert("Copied Text", "success");
        }
    }
    const handleOnExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if (text.length === 0) {
            props.showAlert("Enter Some Text First", "danger");
        }
        else {
            props.showAlert("Removed Extra Spaces", "success");
        }

    }
    function count_words(str1) {
        // str1 = document.getElementById("InputText").value;
        //exclude  start and end white-space
        str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
        //convert 2 or more spaces to 1  
        str1 = str1.replace(/[ ]{2,}/gi, " ");
        // exclude newline with a start spacing  
        str1 = str1.replace(/\n /, "\n");
        return str1.split(' ').length;
    }
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
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={mystls}></textarea>
                </div>
                <div className="d-flex justify-content-center flex-column">
                    <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleOnClear}>Clear Text</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleOnCopy}>Copy Text</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleOnExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Text Summary</h1>
                <h4>{text.length} characters {count_words(text)} words {senscount} sentences {text.length / 125} minutes read</h4>
                <h2>Preview</h2>
                <h5>{text.length > 0 ? text : "Enter Some Text above to preview here :)"}</h5>
            </div>
        </>
    )
}
