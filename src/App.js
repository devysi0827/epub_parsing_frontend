import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
// import logo from './logo.svg';
// import { render } from "react-dom"
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import { Link} from "react-router-dom";


function App() {

  /// 0. 변수모음
  const [spine,setSpine] = useState("spine is null!!")
  const [content,setContent] = useState("content is null!!!")
  const [imageUrl,setImageUrl] = useState("")

  // 1. 백엔드로 파일 보내기
  const sendToBack = function() {

    // 세팅
    // console.log("start send")
    var fileData = new FormData();
    var uploadFile =  document.getElementById("file");
    fileData.append("file",uploadFile.files[0], 'myfile')
    
    // 전송
    axios.post('/loader/getfile/', fileData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    }).then ((response) => {
      console.log("send success")
      console.log(response)
      // console.log(response.data.image)
      // console.log(response.data.content)
      setSpine(response.data.spine)
      setContent(response.data.xhtml)
      setImageUrl(response.data.image)
    }).catch ((err) => {
      console.log("send fail")
      // console.log(err)
    })
  }

  const test = function(){
    var testVar =  document.getElementById("image");
    console.log(testVar)
    console.log(imageUrl)
  }
  
  return (
    <div className="App">
      <input style={{backgroundColor:'red'}} type="file" id="file" name="file" onChange={sendToBack} multiple />
      <hr/>
      <p style= {{color:"green"}}>spine</p>
      <div id="spine">{spine}</div>
      <hr/>
      <p style= {{color:"green"}}>content</p>
      <div id="content"> {content} </div>
      <hr/>
      <p style= {{color:"green"}}>image</p>
      <div id="image"> 
          {imageUrl 
          ? <img 
            id ="img"
            style={{width:500, height:500}} 
            src={`data:image/jpg;base64,${imageUrl}`} 
            alt="image is null"
          /> 
          : ''}
      </div>
      <button onClick={test}>test</button>
    </div>
    
  );
}

export default App;
