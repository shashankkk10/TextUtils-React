import React, {useState} from 'react';
// import copy from "copy-to-clipboard";

export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper-Case!","success");
    }   
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower-Case!","success");
    }  
    const clearText = () =>{
        console.log("Uppercase was clicked");
        setText("");
        props.showAlert("Text has been cleared!","success");
    } 
    const handleExtraSpaces = ()=>{
        let newText=text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra spaces has been removed!","success");
    }
    const handleToCopy = ()=>{
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text has been copied!","success");

    }

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }


    // const handleToCopy = () => {
    //     const [copyText, setCopyText] = useState('');
     
    //     const handleCopyText = (e) => {
    //         setCopyText(e.target.value);
    //     }
     
    //     const copyToClipboard = () => {
    //         copy(copyText);
    //         alert(`You have copied "${copyText}"`);
    //     }
    // }
    

    const [text, setText]=useState('');
    // text="new text"; //Wrong way to update text(change state)
    // setText("new text"); //Correct way to update text(change state)
    return (
        <>
        <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"#042743"}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper-case</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower-case</button>
            <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleToCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h2>Your Text Summary-</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters.</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read.</p>
            <h2>Preview-</h2>
            <p>{text.length>0?text:"Enter something above to show it here."}</p>
        </div>
        </>
    )
}
