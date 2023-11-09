import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../../api/AxiosApi";
import styled from "styled-components";
import { storage } from "../../../api/firebase";
import {FormContainer, FieldContainer, Title, StyledInput, StyledTextarea, SubmitButton, ButtonContainer, StyledLabel, FileUploadContainer, UploadButton, UserImage} from "../../style-components/Post/Post-Posting"

const Posting = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const userId = window.localStorage.getItem("userId");
  console.log("userId : " + userId);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(title, content, userId, url);
    try {
      const rsp = await AxiosApi.boardWrite(title, content, userId, url);
      if (rsp.data === true) {
        alert("글쓰기 성공");
        navigate("/Boards");
      } else {
        alert("글쓰기 실패");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset = () => {
    setTitle("");
    setContent("");
    navigate("/Boards");
  };

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadClick = async () => {
    try {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);

      // 파일을 업로드하고 기다립니다.
      await fileRef.put(file);
      console.log("File uploaded successfully!");

      // 다운로드 URL을 가져오고 기다립니다.
      const url = await fileRef.getDownloadURL();
      console.log("저장경로 확인 : " + url);

      // 상태를 업데이트합니다.
      setUrl(url);
    } catch (error) {
      // 에러를 처리합니다.
      console.error("Upload failed", error);
    }
  };

  return (
    <FormContainer>
      <Title>글쓰기</Title>
      <FieldContainer>
        <StyledInput
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요"
        />
      </FieldContainer>
      <FieldContainer>
        <StyledTextarea
          id="content"
          name="content"
          value={content}
          onChange={handleContentChange}
          placeholder="제목을 입력하세요"
        />
      </FieldContainer>
      <FileUploadContainer>
        <StyledInput type="file" onChange={handleFileInputChange} />
        <UploadButton onClick={handleUploadClick}>사진 업로드</UploadButton>
      </FileUploadContainer>
      {url && <UserImage src={url} alt="uploaded" />}
      <ButtonContainer>
        <SubmitButton onClick={handleSubmit}>글쓰기</SubmitButton>
        <SubmitButton onClick={handleReset}>취소</SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default Posting;