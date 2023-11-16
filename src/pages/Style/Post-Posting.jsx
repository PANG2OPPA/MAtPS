import styled from "styled-components";

export const PaddingBox = styled.div`
  padding: 1rem;
  max-width: 1280px;
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  /* border: 1px solid #ddd; */
  box-sizing: border-box;
  padding: 2rem 2rem 5rem;

  border-radius: 20px;
  box-shadow: 0px 3px 14px -5px #555555;
  background-color: white;
  
  @media (max-width: 768px) {
    
  }

  @media (max-width: 376px) {
    padding: 1rem 1rem 3rem;
  }
`;

export const FieldContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem; // 하단 여백 추가
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 40px;
  margin-bottom: 2rem;
  font-weight: bold;
  
 @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 376px) {
    font-size: 2rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
  padding: 1.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 25px;
  box-sizing: border-box;
 
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 376px) {
    font-size: 1rem;
    padding: 1rem 1rem;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 16px;
  height: 100px;
  font-family: "Noto Sans KR";
  resize: none;
  font-size: 25px;
  height: 500px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 376px) {
    font-size: 1rem;
    padding: 1rem 1rem;
    height: 300px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #D94D4D;
  color: white;
  cursor: pointer;
  margin-top: 1rem;
  width: 150px;
  height: 60px;
  border-radius: 30px;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0px 3px 14px -5px #555555;

  &:hover {
    background-color: #b33f3f;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 50px;
    font-size: 1.2rem;
  }

  @media (max-width: 376px) {
    width: 100px;
    height: 40px;
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end; // 버튼을 중앙에 위치시킴
  margin-top: 20px; // 버튼 상단에 여백 추가
  gap: 1rem; // 버튼 사이에 여백 추가

  
 @media (max-width: 768px) {
    
  }

  @media (max-width: 376px) {
    justify-content: center;
  }
`;

export const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const UploadButton = styled.button`
  background-color: #D94D4D;
  color: white;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 180px;
  border-radius: 15px;
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0px 3px 14px -5px #555555;

  &:hover {
    background-color: #b33f3f;
  }
  @media (max-width: 768px) {
    width: 120px;
    font-size: 1rem;
  }

  @media (max-width: 376px) {
    width: 110px;
    font-size: 0.9rem;
    padding: 0.7rem;

    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 20px;
  box-sizing: border-box;
`;