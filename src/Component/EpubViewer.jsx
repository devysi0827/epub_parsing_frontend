import React from "react";
import axios from "axios";

// use Recoil State
import { useRecoilState } from "recoil";
import {
  titleState,
  creatorState,
  ManifestState,
  ContentState,
  CSSState,
  ImageListState,
} from "../State/RecoilState";

// import React Component
import Metadata from "./Metadata";
import TOC from "./TOC";
import Content from "./Content";

function EpubViewer() {
  const [title, setTitle] = useRecoilState(titleState);
  const [creator, setCreator] = useRecoilState(creatorState);
  const [manifest, setManifest] = useRecoilState(ManifestState);
  const [imageList, setImageList] = useRecoilState(ImageListState);
  const [content, setContent] = useRecoilState(ContentState);
  const [CSS, setCSS] = useRecoilState(CSSState);

  // 백엔드로 epub파일 보내기
  const sendEpub = function () {
    // send 양식 작성
    var fileData = new FormData();
    var uploadFile = document.getElementById("file");
    fileData.append("file", uploadFile.files[0], "myfile");

    // axios
    axios
      .post("/loader/opf/", fileData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // metaData and 목차 세팅
        setTitle(response.data.title);
        setCreator(response.data.creator);
        setManifest(response.data.manifest);
      })
      .then(() => {
        // imageList 세팅
        getImageListAndCss();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // imageList and Css 데이터 가져오기 (use sendEpub)
  const getImageListAndCss = function (file) {
    var fileData = new FormData();
    var uploadFile = document.getElementById("file");
    fileData.append("file", uploadFile.files[0], "myfile");
    fileData.append("name", file);
    axios
      .post("/loader/image/", fileData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImageList(response.data);
        setCSS(response.data["css"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeCss = function () {
    document.getElementById("mycss").innerHTML = CSS;
  };

  return (
    <div>
      <input type="file" id="file" onChange={sendEpub} />
      <button onClick={changeCss}>changecss</button>
      <Metadata />
      <TOC />
      <Content />
    </div>
  );
}

export default EpubViewer;
