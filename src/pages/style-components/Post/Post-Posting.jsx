import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 20px;
  margin: auto;
  max-width: 1200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const FieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; // 수직 방향 중앙 정렬
  margin-bottom: 1rem; // 하단 여백 추가

`;

export const Title = styled.h1`
  color: #333;
`;

export const StyledInput = styled.input`
  width: 95%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
  padding: 10px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 18px;
`;

export const StyledTextarea = styled.textarea`
  width: 95%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 16px;
  height: 100px;
  font-family: "Noto Sans KR";
  resize: none;
  font-size: 18px;
  height: 500px;
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
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 3px 14px -5px #555555;

  &:hover {
    background-color: #b33f3f;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end; // 버튼을 중앙에 위치시킴
  margin-top: 20px; // 버튼 상단에 여백 추가
  gap: 10px; // 버튼 사이에 여백 추가
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
  margin-top: 1rem;
  width: 150px;
  height: 60px;
  border-radius: 30px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 3px 14px -5px #555555;

  &:hover {
    background-color: #b33f3f;
  }
`;

export const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 20px;
`;