import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { titleState, creatorState } from "../State/RecoilState";

function Metadata() {
  const [title, setTitle] = useRecoilState(titleState);
  const [creator, setCreator] = useRecoilState(creatorState);

  return (
    <>
      <hr />
      <FormParagraph>title &nbsp;</FormParagraph>
      <InlineParagraph> {title}</InlineParagraph>
      <HiddenLine />
      <FormParagraph>writer &nbsp;</FormParagraph>
      <InlineParagraph> {creator}</InlineParagraph>
    </>
  );
}

export default Metadata;

const FormParagraph = styled.p`
  margin: 0px;
  color: green;
  display: inline-block;
`;

const InlineParagraph = styled.p`
  display: inline-block;
`;

const HiddenLine = styled.hr`
  visibility: hidden;
  margin: 0px;
`;
