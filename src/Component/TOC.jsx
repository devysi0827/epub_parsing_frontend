import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import {
  ManifestState,
  ContentState,
  ImageListState,
} from "../State/RecoilState";
import styled from "styled-components";

function TOC() {
  const [manifest, setManifest] = useRecoilState(ManifestState);
  const [content, setContent] = useRecoilState(ContentState);
  const [imageList, setImageList] = useRecoilState(ImageListState);

  useEffect(() => {
    mappingImageList();
  }, [content]);

  // 백에서 해당 챕터 내용 가져오기
  const getFileInfo = function (file) {
    // 파일 전송 양식(백에 해당 epub 데이터가 저장되어 있지 않으므로 매번 전송함)
    var fileData = new FormData();
    var uploadFile = document.getElementById("file");
    fileData.append("file", uploadFile.files[0], "myfile");
    fileData.append("name", file);

    // axios
    axios
      .post("/loader/find/", fileData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setContent(response.data.fileData);
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  // 프론트에서 각 챕터의 내용 배치하기
  const mappingImageList = function () {
    let step;
    for (step = 0; step < content.length; step++) {
      let temp = document.getElementById(step);
      // 해당 Id Component가 없다면 리턴(에러방지)
      if (temp === null) {
        return;
      }
      // 이미지라면, src 처리 후 삽입
      if (content[step].slice(0, 4) === "<img") {
        var temp_image = content[step].split(" ");
        for (var i = 0; i < temp_image.length; i++) {
          if (temp_image[i].slice(0, 3) === "src") {
            var image_name = temp_image[i].split("/")[1].split(".")[0];
            var imageData = imageList[image_name];
          }
        }
        temp.innerHTML = `<img src="data:image/jpg;base64,${imageData}" />`;
      } else {
        // 이미지가 아니라면, 그냥 삽입
        temp.innerHTML = content[step];
      }
    }
  };

  return (
    <>
      <hr />
      <FormParagraph>TOC(목차)</FormParagraph>
      {manifest.map((page, index) => (
        <button key={index} onClick={(e) => getFileInfo(page)}>
          {page}
        </button>
      ))}
    </>
  );
}

export default TOC;

const FormParagraph = styled.p`
  color: green;
`;
