import axios from "axios";
const MAtPS_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인
  memberLogin: async (id, pw) => {
    // 회원 로그인을 위한 함수
    const login = {
      // 로그인 정보를 담은 객체를 생성
      id: id, // 사용자 아이디를 설정
      pwd: pw, // 사용자 비밀번호를 설정
    };

    return await axios.post(MAtPS_DOMAIN + "/users/login", login); // 로그인 API에 POST 요청
  },

  
  //회원 조회
  memberGet: async (id) => {
    return await axios.get(MAtPS_DOMAIN + `/users/member/?id=${id}`);
  },

  // 회원 가입
  memberReg: async (id, pwd, name, mail) => {
    const member = {
      id: id,
      pwd: pwd,
      name: name,
      mail: mail,
    };
    return await axios.post(MAtPS_DOMAIN + "/users/new", member);
  },
  // 회원 가입 여부 확인
  memberRegCheck: async (id) => {
    return await axios.get(MAtPS_DOMAIN + `/users/check/?id=${id}`);
  },

  // 회원 탈퇴
  memberDel: async (id) => {
    const del = {
      id: id,
    };
    return await axios.post(MAtPS_DOMAIN + "/user/delete", del);
  },
  // 게시글 조회
  boardList: async () => {
    return await axios.get(MAtPS_DOMAIN + "/api/board");
  },
  // 게시글 상세 조회
  post: async (boardId) => {
    
    return await axios.get(MAtPS_DOMAIN + `/api/post/${boardId}`);
  },
  // 게시글 쓰기
  boardWrite: async (postTitle, userId, postText, postImg) => {
   
    const board = {
      postTitle: postTitle,
      userId: userId,
      postText: postText,
      postImg: postImg,
    };
    return await axios.post(MAtPS_DOMAIN + "/api/posting", board);
  },
  boardDelete: async (boardId) => {
    console.log(boardId);
    return await axios.delete(MAtPS_DOMAIN + `/api/post/${boardId}`);
  },

  updateBoard: async (postNum, postTitle, postText) => {
    const board = {
      postNum: postNum,
      postTitle: postTitle,
      postText: postText
    };
      return await axios.put(MAtPS_DOMAIN + "/api/edit", board);
},
};
export default AxiosApi;