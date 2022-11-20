import './App.css';
import React, { useState } from "react";

const Editor = () => {
  return (
    <div className="App">
        <EditorArea />
    </div>
  );
}

const EditorArea = () => {
  const [texts, setText] = useState([""]);
  const [row, setRow] = useState(0);

  const buttonClick = (event:any) =>{
    let char:string;
    if(event.target.innerHTML === "&lt;"){
      char = "<";
    }else if(event.target.innerHTML === "&gt;"){
      char = ">";
    }else if(event.target.innerHTML === "&amp;"){
      char = "&";
    }else{
      char = event.target.innerHTML;
    }
    texts[row] = texts[row] + char
    setText([...texts]);
  }
  const buttonDelete = () =>{
    texts[row] = texts[row].slice(0, -1)
    setText([...texts]);
  }
  const buttonSpace = () =>{
    texts[row] = texts[row] + " "
    setText([...texts]);
  }
  const buttonEnter = () =>{
    setRow(row + 1);
    setText([...texts,""]);
  }
  const buttons = [
    ["q","w","e","r","t","y","u","i","o","p"],
    ["a","s","d","f","g","h","j","k","l"],
    ["z","x","c","v","b","n","m"],
    ["(",")","{","}","<",">","[","]"],
    ["=","&","|","!","?","+","-","*","/","%","^"],
    [";",".","\"",",",":","'","`","_","#","$","~","@"]
  ]
  return (
    <div>
      {[...Array(row + 1)].map((item,index) => 
        <div className="editor-line"><span>{index + 1}</span> {texts[index]}</div>)
      }
      <RunButton codeText={texts}/>
      { buttons.map((buttonRow,rowIndex) => 
        <div>
         {buttonRow.map((item,index) => <button onClick={buttonClick} key={ 100 * rowIndex + index}>{item}</button>)}
        </div>)
      }
      <button onClick={buttonDelete}>Delete</button>
      <button onClick={buttonSpace}>Space</button>
      <button onClick={buttonEnter}>Enter</button>
      <button onClick={buttonEnter}>←</button>
      <button onClick={buttonEnter}>↑</button>
      <button onClick={buttonEnter}>→</button>
      <button onClick={buttonEnter}>↓</button>
    </div>
  );
}

const RunButton = (props:any) => {
  const [result, setResult] = useState("");
  const runJS = () =>{
    setResult(eval(props.codeText.join(" ")))
  }
  return (
    <div>
      <button className="run-button" onClick={runJS}>Run</button>
        <div>Result</div>
        <div>{result}</div>
    </div>
  );
}

export default Editor;
