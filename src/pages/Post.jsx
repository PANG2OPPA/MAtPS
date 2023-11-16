import React, { useEffect } from "react";
import { PostContainer, PostTitle, Post1, Post1Title, Post1Info, Post1User, Post1UserInfo, Post1Name, Post1Data, Post1Date, Post1View, Post1Comment, Post1Store, Post1Detail, Post1Btn, Post1Btn1, Post1Btn2, DateAndNum } from "../pages/Style/Post-Post";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "./Global_style";
import AxiosApi from "../Api/AxiosApi";
import Header from "./Common/Header";
import Footer from "./Common/Footer";



const Post = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState("");
  const userlog = window.localStorage.getItem("userId");

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await AxiosApi.post(window.localStorage.getItem("postNum"));
        console.log("detail.userId:", response.data.userId);
        setDetail(response.data);
        console.log("성공");
        ;

      } catch (error) {
        console.log(error);
        alert("실패");
      }
    };
    getPost();
  },[])

  if(!detail) return <></>;


  const handleDelete = async () => {
    try {
      if (window.confirm('게시글을 삭제하시겠습니까?')) {
        await AxiosApi.boardDelete(`${detail.postNum}`);
        alert('게시글이 삭제되었습니다.');
        navigate('/BoardList');
      }
    } catch (error) {
      console.log(error);
      alert('게시글 삭제에 실패했습니다.');
    }
  };

  const handleEdit = () => {
    // 수정 버튼 클릭 시 해당 게시글의 수정 페이지로 이동
    navigate(`/edit/${detail.postNum}`);
  };

  return (
    <>
    <Header/>
      <GlobalStyle />
      <PostContainer>
        <PostTitle>게시판</PostTitle>
          <Post1>
            <Post1Title>
              {detail.postTitle}
            </Post1Title>
            <Post1Info>
              <Post1User>
                <Post1UserInfo>
                  <Post1Name>ID : {detail.userId}</Post1Name>
                  <Post1Data>
                    <DateAndNum>
                      <Post1Date>Date : {detail.postDate}</Post1Date>
                      <Post1Comment>No : {detail.postNum}</Post1Comment>
                    </DateAndNum>
                   
                    <hr />
                    <Post1View>{detail.postText}</Post1View>
                    <Post1Detail><img src={detail.postImg}/></Post1Detail>
                  </Post1Data>
                </Post1UserInfo>
              </Post1User>
            </Post1Info>
          </Post1>

        <Post1Btn>
          <Post1Btn1
          disabled={userlog !== detail.userId}
          style={{opacity: userlog !== detail.userId ? 0 : 1 }}
          onClick={handleEdit}
          >수정</Post1Btn1>

          <Post1Btn2 
          disabled={userlog !== detail.userId}
          onClick={handleDelete}
          style={{opacity: userlog !== detail.userId ? 0 : 1 }}
          >삭제</Post1Btn2>

        </Post1Btn>
</PostContainer>
<Footer/>
</> 
  );
};
 
export default Post;
