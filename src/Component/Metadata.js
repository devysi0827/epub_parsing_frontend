import React from 'react';
import { useRecoilState } from 'recoil';
import {
    titleState,
    creatorState
  } from "../State/RecoilState"
  
function Metadata () {

    const [title,setTitle] = useRecoilState(titleState)
    const [creator,setCreator] = useRecoilState(creatorState)

  return (
    <div>
        <hr />
        <p style= {{color:"green", display:"inline-block"}}>title &nbsp;</p>
        <p style={{display:"inline-block"}} id="meta_title"> {title}</p>
        <hr style={{visibility:"hidden"}}/>
        <p style= {{color:"green", display:"inline-block"}}>writer &nbsp;</p>
        <p style={{display:"inline-block"}} id="meta_writer"> {creator}</p>

    </div>
  )
}

export default Metadata

