import React, { useState, useEffect } from "react";
import AxiosApi from "../Api/AxiosApi";
import { useNavigate, useParams } from "react-router-dom";
import GlobalStyle from "./Global_style";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { 
  Container, 
  Title, 
  TextBox,
  TitleBox,
  UpdateBtn,
  UpdateBox,
  Box
} from "./Style/Post-EditPost";
import { PaddingBox } from "./Style/Post-Posting";


const EditPost = ({ postNum }) => {
  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");

  const {num} = useParams();
  useEffect(() => {
    // 게시글 정보를 불러와서 해당 페이지에 보여주는 기능
    const getPost = async () => {
      try {
        const response = await AxiosApi.post(num);
        setPostTitle(response.data.postTitle);
        setPostText(response.data.postText);
        console.log(response.data.postText);
      } catch (error) {
        console.log(error);
        alert("게시글 정보를 불러오는 데 실패했습니다.");
      }
    };
    getPost();
  }, [postNum]);

  const handleUpdate = async () => { 
  try {
    await AxiosApi.updateBoard(num, postTitle, postText);
    alert("게시글이 성공적으로 수정되었습니다.");
    navigate("/BoardList"); // 수정 후 목록 페이지로 이동
  } catch (error) {
    console.log(error);
    alert("게시글 수정에 실패했습니다.");
  }
};

  return (
    <PaddingBox>
      <Header/>
      <Box>
      <GlobalStyle />
      <Title>게시글 수정</Title>
      <Container>
        <TitleBox
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <br />
        <TextBox
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <br />
        <UpdateBox>
        <UpdateBtn onClick={handleUpdate}>수정 완료</UpdateBtn>
        </UpdateBox>
      
      </Container>
      </Box>
      <Footer/>
    </PaddingBox>

  );
};

export default EditPost;
