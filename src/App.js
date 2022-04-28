import React from "react";
import styled from "styled-components";
import EpubViewer from "./Component/EpubViewer";

function App() {
  return (
    <CenterDiv>
      <EpubViewer />
    </CenterDiv>
  );
}

export default App;

const CenterDiv = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  text-align: center;
`;
