import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 5rem 1rem 5rem;
  margin: 1rem;
  box-sizing: border-box;

`;

export const PostTitle = styled.div`
  color: #333;
  font-size: 3rem;
  font-weight: 900;
  padding-bottom: 4rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 376px) {
    
  }
`;

export const Post1 = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 3rem;

  border-radius: 20px;
  padding: 4rem 2rem;
  box-shadow: 0px 3px 14px -5px #555555;
`;

export const Post1Title = styled.div`
  font-size: 2.5rem;
  padding-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 376px) {
    
  }
`;

export const Post1Info = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;
export const Post1Profile = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  box-shadow: 0px 3px 14px -5px #555555;
  border: 1px solid black;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`;

export const Post1User = styled.div`
  width: 100%;
`;

export const Post1UserInfo = styled.div`

`;

export const Post1Name = styled.div`
  font-size: 1.7rem;
  color: #555555;
  margin-bottom: 1rem;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 376px) {
    
  }
`;

export const Post1Data = styled.div`
  font-size: 1.5rem;
  color: #555555;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 376px) {
    
  }

`;
export const DateAndNum = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Post1Date = styled.div`
  text-align: right;
  margin-bottom: 1rem;
`;

export const Post1View = styled.div`
  font-size: 1.8rem;
  margin: 3rem 0 3rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 376px) {
    
  }
`;

export const Post1Comment = styled.div`
  text-align: right;
  margin-bottom: 1rem;
`;

export const Post1Store = styled.div`
  display: flex;
  font-size: 30px;
  align-items: end;
  margin-bottom: 5rem;
`;

export const Post1Detail = styled.div`
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 150%;
  margin: 0 auto;
  text-align: center;

  img {
    width: 80%;
  }
`;

export const Post1Btn = styled.div`
  display: flex;
  justify-content: end;

`;

export const Post1Btn1 = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 30px;
  border: none;
  font-size: 25px;
  font-weight: bold;
  margin-right: 20px;
  box-shadow: 0px 3px 14px -5px #555555;
  background-color: #D94D4D;

  @media (max-width: 768px) {
    width: 120px;
    height: 50px;
    font-size: 22px;
  }

  @media (max-width: 376px) {
    
  }
`;

export const Post1Btn2 = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 30px;
  border: none;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0px 3px 14px -5px #555555;
  background-color: #D94D4D;

  @media (max-width: 768px) {
    width: 120px;
    height: 50px;
    font-size: 22px;
  }

  @media (max-width: 376px) {
    
  }
`;

export const Post2 = styled.div`
  border-radius: 20px;
  margin-bottom: 5rem;
  box-shadow: 0px 3px 14px -5px #555555;
  border: 1px solid black;
`;

export const Post2Commenting = styled.div`
  margin-bottom: 1rem;
  margin-top: 2rem;
  border: 1px solid black;
`;

export const Post2Commenting1 = styled.div`
  display: flex;
  border: 1px solid black;
`;

export const Post2Commenting2 = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  justify-content: space-between;
  border: 1px solid black;
`;

export const Post2Commenting3 = styled.input`
  width: 1150px;
  height: 200px;
  display: flex;
  font-size: 25px;
  margin-bottom: 1rem;
  border: 1px solid black;
`;

export const Post2Commenting4 = styled.div`
  display: flex;
  justify-content: end;
  border: 1px solid black;
`;

export const Post2Btn = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 30px;
  border: none;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0px 3px 14px -5px #555555;
  border: 1px solid black;
`;

export const Post2Comment = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border: 1px solid black;
`;

export const Post2Comment1 = styled.div`
  display: flex;
  border: 1px solid black;
`;

export const Post2Comment2 = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  box-shadow: 0px 3px 14px -5px #555555;
  border: 1px solid black;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`;

export const Post2Comment3 = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const Post2Comment4 = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 1rem;
  border: 1px solid black;
`;

export const Post2Comment5 = styled.div`
  width: 1150px;
  height: 100px;
  font-size: 25px;
  background-color: lightgray;
  border-radius: 15px 15px 0px 0px;
  border: 1px solid black;
`;

export const Post2Comment6 = styled.div`
  background-color: lightgray;
  border-radius: 0px 0px 15px 15px;
  font-size: 20px;
  border: 1px solid black;
`;

export const Post2MoreBtn = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 30px;
  border: none;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid black;
  
`;

export const Post2More = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border: 1px solid black;
`;

export const Post3 = styled.div`
  width: 100%;
  height: 900px;
  border: 1px solid black;
`;