import styled from "styled-components";

export const BoardContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #333;
  text-align: left;
  font-size: 40px;
  font-weight: 900;
  padding-bottom: 2rem;
`;

export const TopPost = styled.div`
    display: flex;
    width: 1200px;
    color: black;
    height: 400px;
    margin-bottom: 2rem;
    box-shadow: 0px 3px 14px -5px #555555;
    border-radius: 40px;
`;

export const TopPostImg = styled.div`
    width: 400px;
    background-color: lightgray;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 40px 0px 0px 40px;
    font-size: 30px;
    font-weight: bold;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TopPostText = styled.div`
    
    width: 800px;
    border-radius: 0px 40px 40px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

export const TopPostTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 70px;
`;

export const TopPostContent = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

export const PostListTop = styled.div`
    display: flex;
    font-size: 40px;
    font-weight: 900;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

export const Box = styled.div`
`;

export const PostListTitle = styled.div`
`;

export const PostSearchText = styled.input`
    height: 50px;
    width: 500px;
    background-color: lightgray;
    border-radius: 25px 25px 25px 25px;
    border: lightgray;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const PostSearch = styled.div`
    display: flex;
`;

export const PostListSearchBtn = styled.button`
    height: 50px;
    width: 80px;
    background-color: #D94D4D;
    border: none;
    border-radius: 0px 25px 25px 0px;
    font-size: 25px;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Post = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
`;




export const PostList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    
`;

export const PostContentTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    background-color: lightgray;
    border-radius: 20px;
    margin: 10px;
`;

export const PaginationBox = styled.div`
    .pagination { display: flex; justify-content: center; margin: 30px;}
    ul { list-style: none; padding: 0; }
    ul.pagination li {
        display: inline-block;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
    }
    ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
    ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
    ul.pagination li a { text-decoration: none; color: #b43f3f; font-size: 20px; font-weight: bold; }
    ul.pagination li.active a { color: #ff5858; }
    ul.pagination li.active { border: 1px solid #b43f3f; box-sizing: border-box; border-radius: 10px;}
    ul.pagination li a:hover,
    ul.pagination li a.active { 
        background-color: #d94d4da4; 
        width: 50px; 
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        }
`;

export const PostContentTitle1 = styled.div`
    width: 380px;
    height: 400px;
    box-sizing: border-box;
    border-radius: 20px 20px 0px 0px;
    img {
        width: 380px;
        height: 400px;
        object-fit: cover;
        border-radius: 20px 20px 0px 0px;
    }
`;

export const PostContentTitle2 = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 5px;
    padding-left: 10px;
`;

export const PostContentTitle3 = styled.div`
    font-size: 20px;
    margin-bottom: 5px;
    padding-left: 10px;
`;

export const PostContentTitle4 = styled.div`
    display: flex;
    padding-left: 10px;
    border-radius: 0px 0px 20px 20px;
    padding-bottom: 5px;
`;


export const PostingBtn = styled.button`
    width: 200px;
    height: 60px;
    background-color: #D94D4D;
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 24px;
    font-weight: bold;
`;

export const PostBottom = styled.div`
    display: flex;
    justify-content: flex-end;
`;
