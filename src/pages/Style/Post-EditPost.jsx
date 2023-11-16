import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 2rem 5rem;

  border-radius: 20px;
  box-shadow: 0px 3px 14px -5px #555555;
  background-color: pink;
    @media (max-width: 768px) {
    
    }

    @media (max-width: 376px) {
    padding: 1rem 1rem 3rem;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 2rem;
`;

export const TitleBox = styled.input`
    width: 100%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
    padding: 1.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 15px;
    font-size: 25px;
    box-sizing: border-box;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 376px) {
        font-size: 1rem;
        padding: 1rem 1rem;
    }
    
`;

export const TextBox = styled.textarea`
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
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 376px) {
        font-size: 1rem;
        padding: 1rem 1rem;
        height: 300px;
    }
`; 

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const UpdateBtn = styled.button`
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
`;

export const UpdateBox = styled.div`
  display: flex;
  justify-content: end;
`;