import React, { useState } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
// import { observable } from 'mobx';
// import { observer } from 'mobx-react';

function Sidebar() {
  
  /// 0. 변수모음
  const [title,setTitle] = useState("title is null!!")
  const [spine,setSpine] = useState(['null'])
  const [manifest,setManifest] = useState(['null'])
  const [content,setContent] = useState("content is null!!!")
  const [imageUrl,setImageUrl] = useState("")

  // 1. 백엔드로 파일 보내기
  const sendToBack = function() {

    // 세팅
    var fileData = new FormData();
    var uploadFile =  document.getElementById("file");
    fileData.append("file",uploadFile.files[0], 'myfile')
    
    // 전송
    axios.post('/loader/opf/', fileData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    }).then ((response) => {
      console.log(response)
      setTitle(response.data.title)
      setSpine(response.data.spine)
      setManifest(response.data.manifest)
      // setContent(response.data.xhtml)
      // setImageUrl(response.data.image)
    }).catch ((err) => {
      console.log(err)
    })
  }

    //3. 버튼 누르면 해당 html backend로 연락보내기
    const WantPageInfo = function(page) {
      console.log(page)
      
    }

    //4. 버튼 누르면 해당 file backend로 연락보내기
    const WantFileInfo = function(file) {
      var fileData = new FormData();
      var uploadFile =  document.getElementById("file");
      fileData.append("file",uploadFile.files[0], 'myfile')
      fileData.append("name",file)
      
       // 전송
      axios.post('/loader/finder/', fileData, {
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      }).then ((response) => {
        console.log(response)
        if (response.data.file === 'html') {

          setContent(response.data.data)
        }

        // setTitle(response.data.title)
        // setSpine(response.data.spine)
        // setManifest(response.data.manifest)
        else {

          setImageUrl(response.data.data)
        }
      }).catch ((err) => {
        console.log(err)
      })
    }


  return (
    <div>
      <input style={{backgroundColor:'red'}} type="file" id="file" name="file" onChange={sendToBack} multiple />
      <hr/>
      <p style= {{color:"green"}}>title</p>
      <div id="spine">{title}</div>
      <hr/>
      <p style= {{color:"green"}}>spine</p>
      <div id="spine">
        {spine.map((page,index) =>
            <button key= {index} onClick={(e) => WantPageInfo(page)}> 
              {page}
            </button>
        )}
      </div>
      <hr/>
      <p style= {{color:"green"}}>manifest</p>
      <div id="spine">
        {manifest.map((file,index) =>
            <button key= {index} onClick={(e) => WantFileInfo(file)}> 
              {file}
            </button>
        )}
      </div>
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
            alt=" is null"
          /> 
          : ''}
      </div>
    </div>
  )
}

export default Sidebar