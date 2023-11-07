import styled from "styled-components";

const PostContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`;

const PostTitle = styled.div`
    border: 1px solid black;
    color: #333;
    font-size: 40px;
    font-weight: 900;
    padding-bottom: 2rem;
`;

const Post1 = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 800px;
    box-sizing: border-box;
`;

const Post1Title = styled.div`
    border: 1px solid black;
    font-size: 45px;
    padding-bottom: 1rem;
`;

const Post1Info = styled.div`
    display: flex;
    border: 1px solid black;
`;

const Post1Profile = styled.div`
    border: 1px solid black;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    display: flex;
    align-items: center;
`;

const Post1User = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Post1Name = styled.div`
    border: 1px solid black;
    font-size: 35px;
    font-weight: bold;
`;

const Post1Date = styled.div`
    border: 1px solid black;
    font-size: 30px;
`;

const Post2 = styled.div`
    border: 1px solid black;
`;

const Post3 = styled.div`
    border: 1px solid black;
`;

const Post4 = styled.div`
    border: 1px solid black;
`;

const Post5 = styled.div`
    border: 1px solid black;
`;


const Post = () => {

    return (
        <PostContainer>
            <PostTitle>
                게시판
            </PostTitle>
            <Post1>
                <Post1Title>
                    게시글 제목 - 상호명
                </Post1Title>
                <Post1Info>
                    <Post1Profile>
                        유저 이미지
                    </Post1Profile>
                    <Post1User>
                        <Post1Name>
                            유저 닉네임
                        </Post1Name>
                        <Post1Date>
                            게시 날짜
                        </Post1Date>
                        <Post1View>
                            조회수 0
                        </Post1View>
                        <Post1Comment>
                            댓글 0
                        </Post1Comment>
                    </Post1User>
                </Post1Info>

                
            </Post1>
            <Post2>

            </Post2>
            <Post3>

            </Post3>
            <Post4>

            </Post4>
            <Post5>

            </Post5>

        </PostContainer>
    )
};

export default Post;