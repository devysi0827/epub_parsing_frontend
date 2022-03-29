import React from 'react'
import EpubComponent from './EpubComponent'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import {
    ContentState,
  } from "../State/RecoilState"

function Content() {

    const [content,setContent] = useRecoilState(ContentState)
    return (
    <div>
        <hr/>
        <p style= {{color:"green"}}>book content</p>
        <section>
            {content && content.map((paragraph,index) =>
                    <EpubComponent index={index} paragraph={paragraph}/>
            )}
        </section>
    </div>
    )
}

export default Content