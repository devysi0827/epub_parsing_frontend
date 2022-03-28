import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import {
  titleState,
  creatorState,
  ManifestState,
  ContentState,
  ImageState,
  ImageListState
} from "../State/RecoilState"

// import Component
import Metadata from './Metadata';
import TOC from './TOC';
import ReactP from './ReactP';

function Sidebar() {
  
  /// 0. metadata 변수
  const [title,setTitle] = useRecoilState(titleState)
  const [creator,setCreator] = useRecoilState(creatorState)

  // Toc 변수
  const [manifest,setManifest] = useRecoilState(ManifestState)
  const [imageList,setImageList] = useRecoilState(ImageListState)

  // const [spine,setSpine] = useState(['null'])
  const [content,setContent] = useRecoilState(ContentState )
  const [imageUrl,setImageUrl] = useRecoilState(ImageState)

  const GetImageList = function(file) {
    var fileData = new FormData();
    var uploadFile =  document.getElementById("file");
    fileData.append("file",uploadFile.files[0], 'myfile')
    fileData.append("name",file)
    
     // 전송
    axios.post('/loader/image/', fileData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    }).then ((response) => {
      console.log(response.data)
      setImageList(response.data)
    }).catch ((err) => {
      console.log(err)
    })
  }

  // 1. 백엔드로 파일 보내기 ==> 
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
      setCreator(response.data.creator)
      setManifest(response.data.manifest)
    }).then(() =>{
      GetImageList()
    }).catch ((err) => {
      console.log(err)
    })
  }


  return (
    <div>
      <input style={{backgroundColor:'white'}} type="file" id="file" name="file" onChange={sendToBack} multiple />
      <button onClick={GetImageList}>ImageButton</button>
      {/* <button onClick={test}>mybutton</button> */}

      <Metadata />
      <TOC />
      <hr/>
      <p style= {{color:"green"}}>book content</p>
      <div>
        {content && content.map((paragraph,index) =>
              <ReactP index={index}/>
        )}
      </div>
    </div>
  )
}

export default Sidebar