import React, {useEffect} from 'react'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import {
    ManifestState,
    ContentState,
    ImageState,
    ImageListState
  } from "../State/RecoilState"

function TOC() {

    const [manifest,setManifest] = useRecoilState(ManifestState)
    const [content,setContent] = useRecoilState(ContentState)
    const [imageList,setImageList] = useRecoilState(ImageListState)

    useEffect(() => {
        mappingList()
      }, [content]);
    
    const mappingList = function() {
        var step;
        for (step = 0; step < content.length; step++) {
            var temp = document.getElementById(step)
            console.log(temp)
            if (temp === null){
              return
            }
            if (content[step].slice(0,4) === '<img' ){
                var temp_image = content[step].split(' ')
                for ( var i = 0; i < temp_image.length; i++) {
                if (temp_image[i].slice(0,3) === 'src') {
                    var image_name = temp_image[i].split('/')[1].split('.')[0]
                    var imageData = imageList[image_name]
                } 
                }
                temp.innerHTML = `<img src="data:image/jpg;base64,${imageData}" />`
            }
            else {
                temp.innerHTML = content[step]
            }
        }
}
    //4. 버튼 누르면 해당 file backend로 연락보내기
    const WantFileInfo = function(file) {
        var fileData = new FormData();
        var uploadFile =  document.getElementById("file");
        fileData.append("file",uploadFile.files[0], 'myfile')
        fileData.append("name",file)
        
         // 전송
        axios.post('/loader/find/', fileData, {
          headers: {
            'Content-Type' : 'multipart/form-data'
          }
        }).then ((response) => {
            console.log(response)
            console.log(response.data.ars)
            setContent(response.data.ars)
        }).then(
        )
        .catch ((err) => {
          console.log(err)
        })
      }
    
        return (
            <>
            {/* <button onClick={mappingList}>111</button> */}
            <hr/>
            <p style= {{color:"green"}}>TOC(목차)</p>
            {manifest.map((page,index) =>
            <button key= {index} onClick={(e) => WantFileInfo(page)}  > 
              {page}
            </button>
        )}
            </>
        );
}

export default TOC