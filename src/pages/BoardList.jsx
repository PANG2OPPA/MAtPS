import { useNavigate } from "react-router-dom";
import GlobalStyle from "../pages/Global_style";
import {
  BoardContainer,
  Title,
  Center,
  PostListTop,
  Box,
  PostListTitle,
  PostSearchText,
  PostSearch,
  PostList,
  PostContentTitle,
  PostContentTitle1,
  PostContentTitle2,
  PostContentTitleInfo,
  PostContentTitle3,
  PostingBtn,
  PostBottom,
  PaginationBox,
  PostContentTitle4,
  PostImg1,
} from "../pages/Style/Post-BoardList";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { useState, useEffect } from "react";
import AxiosApi from "../Api/AxiosApi";
import Pagination from "react-js-pagination";

const BoardList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // 한 페이지에 표시할 게시글 수

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const postList = async () => {
    try {
      const resp = await AxiosApi.boardList();
      if (resp.status === 200) {
        if (!search) {
          setList(resp.data);
        } else {
          const filteredList = resp.data.filter((post) =>
            post.postTitle.toLowerCase().includes(search.toLowerCase())
          );
          setList(filteredList);
        }
      }
    } catch (e) {
      console.error(e);
      alert("에러 발생");
    }
  };

  useEffect(() => {
    postList();
  }, [search]);

  const handleWriteClick = () => {
    navigate("/Posting");
  };

  const handleDetailClick = (id) => {
    window.localStorage.setItem("postNum", id);
    navigate(`/Post`);
  };

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(list.length / postsPerPage);

  // 현재 페이지에 해당하는 아이템만 가져오기
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    
    <>
    <Header/>
      <GlobalStyle />
      <BoardContainer>
        <Box>
          <Title>게시판</Title>
          <Center>
            <PostListTop>
              <PostListTitle>게시글 목록</PostListTitle>
              <PostSearch>
                <PostSearchText
                  value={search}
                  onChange={onChange}
                  placeholder="검색어를 입력하세요"
                />
              </PostSearch>
            </PostListTop>
            
                <PostList>
                  {currentPosts &&
                  currentPosts.map((post) => (
                    <PostContentTitle
                    key={post.postNum}
                    onClick={() => handleDetailClick(post.postNum)}>
                      <PostContentTitle1>
                        <img src={post.postImg}/>

                        </PostContentTitle1>
                      <PostContentTitle2>{post.postTitle}</PostContentTitle2>
                        <PostContentTitle3>{post.userId}</PostContentTitle3>
                        <PostContentTitle4>{post.postDate}</PostContentTitle4>
                    </PostContentTitle>
                  ))}
                </PostList>
              
            <PaginationBox>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={postsPerPage}
                totalItemsCount={list.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
              />
            </PaginationBox>
            <PostBottom>
              <PostingBtn onClick={handleWriteClick}>글쓰기</PostingBtn>
            </PostBottom>
          </Center>
        </Box>
      </BoardContainer>\
      <Footer/>
    </>
  );
};

export default BoardList;
