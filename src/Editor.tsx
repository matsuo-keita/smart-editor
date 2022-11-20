import './App.css';
import React, { useState } from "react";

const Editor = () => {
  return (
    <div className="App">
      <header className="App-header">
        <EditorArea />
      </header>
    </div>
  );
}

const EditorArea = () => {
  const [texts, setText] = useState(["","|"]);
  const [row, setRow] = useState(1);
  const buttonClick = (event:any) =>{
    const char = event.target.innerHTML;
    texts[row] = texts[row].slice(0, -1) + char + "|"
    setText([...texts]);
  }
  const buttonDelete = () =>{
    texts[row] = texts[row].slice(0, -2) + "|"
    setText([...texts]);
  }
  const buttonSpace = () =>{
    texts[row] = texts[row].slice(0, -1) + " |"
    setText([...texts]);
  }
  const buttonEnter = () =>{
    setRow(row + 1);
    texts[row] = texts[row].slice(0, -1)
    setText([...texts,"|"]);
  }
  const buttonsRow1:string[] = ["q","w","e","r","t","y","u","i","o","p","@","["]
  const buttonsRow2 = ["a","s","d","f","g","h","j","k","l",";",":","]"]
  const buttonsRow3 = ["z","x","c","v","b","n","m",",",".","/","_"]
  const buttonsRow4 = ["!","\"","#","$","%","&","'","(",")","-","=","~"]
  const buttonsRow5 = ["{","}","<",">","?","`","|","^"]
  const buttonsRow6 = ["←","↑","→","↓"]
  return (
    <div>
      <div style={{"width":"300px"}}>1 {texts[1]}</div>
      <div>2 {texts[2]}</div>
      <div>3 {texts[3]}</div>
      <div>Run</div>
      <div className="row1">
        { buttonsRow1.map((item,index) => <button onClick={buttonClick} key={index}>{item}</button>) }
      </div>
      <div className="row2">
        { buttonsRow2.map((item,index) => <button onClick={buttonClick} key={index+100}>{item}</button>) }
      </div>
      <div className="row3">
        { buttonsRow3.map((item,index) => <button onClick={buttonClick} key={index+200}>{item}</button>) }
      </div>
      <div className="row4">
        { buttonsRow4.map((item,index) => <button onClick={buttonClick} key={index+300}>{item}</button>) }
      </div>
      <div className="row5">
        { buttonsRow5.map((item,index) => <button onClick={buttonClick} key={index+400}>{item}</button>) }
      </div>
      <button onClick={buttonDelete}>Delete</button>
      <button onClick={buttonSpace}>Space</button>
      <button onClick={buttonEnter}>Enter</button>
      <div className="row6">
        { buttonsRow6.map((item,index) => <button onClick={buttonClick} key={index+500}>{item}</button>) }
      </div>
    </div>
  );
}

export default Editor;
