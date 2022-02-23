// import logo from './logo.svg';
import { render } from "react-dom"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Link} from "react-router-dom";
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';


function App() {
  const [spine,setSpine] = useState("spine is null!!")
  const [content,setContent] = useState("content is null!!!")
  const [imageUrl,setImageUrl] = useState("imageUrl is null!!")
  const sendToBack = function() {
    console.log("start send")
    var fileData = new FormData();
    var uploadFile =  document.getElementById("file");
    fileData.append("file",uploadFile.files[0], 'myfile')
    
    // console.log로 정책상 formdata는 찍히지 않음
    // console.log(uploadFile.files[0])
    // console.log(fileData)
    // for (var key of fileData.keys()) {
    //   console.log(key);
    // }
    // for (var value of fileData.values()) {
    //   console.log(value);
    // }

    axios.post('/loader/getfile/', fileData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    }).then ((response) => {
      console.log("send success")
      console.log(response)
      console.log(response.data.image)
      // console.log(response.data.content)
      setSpine(response.data.spine)
      setContent(response.data.xhtml)
    }).catch ((err) => {
      console.log("send fail")
      // console.log(err)
    })
  }

  const sendTest = function() {
    axios.get('http://127.0.0.1:8000/loader/getfile/',{
    }).then ((response) => {
      console.log("send success")
      console.log(response)
    }).catch ((err) => {
      console.log("send fail")
      // console.log(err)
    })
  }

  const test = function() {
    console.log(1)
  }
  
  return (
    <div className="App">
      <input style={{backgroundColor:'red'}} type="file" id="file" name="file" onChange={sendToBack} multiple />
      {/* <button onClick={sendTest}>1234</button> */}
      <hr/>
      <p style= {{color:"green"}}>spine</p>
      <div id="spine">{spine}</div>
      <hr/>
      <p style= {{color:"green"}}>content</p>
      <div id="content"> {content} </div>
      <hr/>
      <p style= {{color:"green"}}>image</p>
      <div id="image"> <img src={imageUrl} alt="image is null"/> </div>
    </div>
    
  );
}

export default App;
