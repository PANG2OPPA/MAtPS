import React from "react";
import styled from "styled-components";
import HeaderMatpsLogo from "../images/matps가로로고.png";
import HeadSearchIcon from "../images/SearchIcon.png";
import CommunicationIcon from "../images/ChatIcon.png";
import MypageIcon from "../images/UserIcon.png";

const HeaderTab = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1280px;
  height: 80px;
  border: 2px solid red;
  align-items: center;
`;

const HeaderImg = styled.img`
  margin-left: 20px;
  height: 50px;
  width: 180px;
`;

const HeaderSearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 207px;
`;

const HeaderRectangle = styled.div`
  display: flex;
  align-items: center;
  background-color: #e6e6e6;
  /* border: 1px solid transparent; */
  border-radius: 30px 0 0 30px;
  height: 52px;
  width: 446px;
`;

const HeaderSearchWrapper = styled.div`
  background-color: #d94d4d;
  border-radius: 0 30px 30px 0;
  width: 76px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderSearch = styled.img`
  height: 30px;
  width: 30px;
`;

const HeaderHeadIcon = styled.div`
  display: flex;
  margin-left: 209px;
  margin-right: 20px;
`;

const HeaderTalking = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 1rem;
`;

const HeaderUserInterface = styled.img`
  height: 50px;
  width: 50px;
`;

const Header = () => {
  return (
    <HeaderTab>
      <HeaderImg alt="헤더가로로고" src={HeaderMatpsLogo} />

      <HeaderSearchBar>
        <HeaderRectangle></HeaderRectangle>
        <HeaderSearchWrapper>
          <HeaderSearch alt="검색창돋보기" src={HeadSearchIcon} />
        </HeaderSearchWrapper>
      </HeaderSearchBar>

      <HeaderHeadIcon>
        <HeaderTalking alt="커뮤니티페이지" src={CommunicationIcon} />
        <HeaderUserInterface alt="로그인,마이페이지" src={MypageIcon} />
      </HeaderHeadIcon>
    </HeaderTab>
  );
};

export default Header;
