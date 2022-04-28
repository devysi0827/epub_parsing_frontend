import React from "react";
import EpubComponent from "./EpubComponent";
import { useRecoilState } from "recoil";
import { ContentState } from "../State/RecoilState";
import styled from "styled-components";

function Content() {
  const [content, setContent] = useRecoilState(ContentState);
  return (
    <div>
      <hr />
      <FormParagraph>book content</FormParagraph>

      {/* css를 위해서 section이라는 simentic tag를 사용 */}
      <section>
        {content &&
          content.map((paragraph, index) => (
            <EpubComponent key={index} index={index} paragraph={paragraph} />
          ))}
      </section>
    </div>
  );
}

export default Content;

const FormParagraph = styled.p`
  color: green;
`;
