import React from "react";
import {
  StoreListBox01,
  StoreItem,
  StoreListImgBox01,
  HeartIcon01,
  StorListInfo01,
  StoreType01,
  StoreNam01,
  StoreRaitingBox01,
  StroeRatingStar01,
  StroeRating01,
  StroeUpdate01,
  StoreContacInfo,
  StoreContac01,
  StoreAddr01,
} from "../../style-components/StoreList/StoreList-StoreListBox";
// import StoreListImg01 from "../../images/음식 테스트 이미지.jpg";
import HeartImg01 from "../../../images/HearIcon.png";
import RatingStar01 from "../../../images/star.png";
import StoreListImg01 from "../../../images/음식테스트사진01.jpeg";
import StoreListImg02 from "../../../images/음식테스트사진02.jpeg";
import StoreListImg03 from "../../../images/음식테스트사진03.jpeg";
import StoreListImg04 from "../../../images/음식테스트사진04.jpeg";
import StoreListImg05 from "../../../images/음식테스트사진05.jpeg";
import StoreListImg06 from "../../../images/음식테스트사진06.jpeg";
import StoreListImg07 from "../../../images/음식테스트사진07.jpeg";
import StoreListImg08 from "../../../images/음식테스트사진08.jpeg";

const storesData = [
  {
    id: 1,
    type: "음식 종류 1",
    name: "식당명 1",
    rating: "5.0",
    updateDate: "2023-10-26",
    contact: "Tel : 02 1234 5678",
    address: "서울 강남구 테헤란로 123",
    image: StoreListImg01,
  },
  {
    id: 2,
    type: "음식 종류 2",
    name: "식당명 2",
    rating: "5.0",
    updateDate: "2023-10-26",
    contact: "Tel : 02 1234 5678",
    address: "서울 강남구 테헤란로 123",
    image: StoreListImg02,
  },
  {
    id: 3,
    type: "음식 종류 3",
    name: "식당명 3",
    rating: "5.0",
    updateDate: "2023-10-26",
    contact: "Tel : 02 1234 5678",
    address: "서울 강남구 테헤란로 123",
    image: StoreListImg03,
  },
  {
    id: 4,
    type: "음식 종류 4",
    name: "식당명 4",
    rating: "5.0",
    updateDate: "2023-10-26",
    contact: "Tel : 02 1234 5678",
    address: "서울 강남구 테헤란로 123",
    image: StoreListImg04,
  },
  {
    id: 5,
    type: "음식 종류 5",
    name: "식당명 5",
    rating: "5.0",
    updateDate: "2023-10-26",
    contact: "Tel : 02 1234 5678",
    address: "서울 강남구 테헤란로 123",
    image: StoreListImg05,
  },
  {
    id: 6,
    type: "음식 종류 6",
    name: "식당명 6",
    rating: "5.0",
    updateDate: "2023-10-26",
    contact: "Tel : 02 1234 5678",
    address: "서울 강남구 테헤란로 123",
    image: StoreListImg06,
  },
  {
    id: 7,
    type: "음식 종류 7",
    name: "식당명 7",
    rating: "5.0",
    updateDate: "2023-10-26",
    contact: "Tel : 02 1234 5678",
    address: "서울 강남구 테헤란로 123",
    image: StoreListImg07,
  },
  {
    id: 8,
    type: "음식 종류 8",
    name: "식당명 8",
    rating: "5.0",
    updateDate: "2023-10-26",
    contact: "Tel : 02 1234 5678",
    address: "서울 강남구 테헤란로 123",
    image: StoreListImg08,
  },
  // 나머지 7 세트의 데이터를 추가하세요.
];

const StoreListBoxMap = () => {
  return (
    <StoreListBox01>
      {storesData.map((store, index) => (
        <StoreItem key={store.id}>
          {/* <StoreListImgBox01 alt="첫째줄 이미지" src={StoreListImg01} /> */}
          <StoreListImgBox01 alt={`이미지 ${index + 1}`} src={store.image} />
          <HeartIcon01 alt="첫번째 하트 이미지" src={HeartImg01} />

          <StorListInfo01>
            <StoreType01>음식 종류</StoreType01>
            <StoreNam01>식당명</StoreNam01>

            <StoreRaitingBox01>
              <StroeRatingStar01 alt="첫번째 별표 이미지" src={RatingStar01} />
              <StroeRating01>5.0</StroeRating01>
            </StoreRaitingBox01>

            <StroeUpdate01>2023-10-26</StroeUpdate01>
          </StorListInfo01>

          <StoreContacInfo>
            <StoreContac01> Tel : 02 1234 5678 </StoreContac01>
            <StoreAddr01>서울 강남구 테헤란로 123</StoreAddr01>
          </StoreContacInfo>
        </StoreItem>
      ))}
    </StoreListBox01>
  );
};

export default StoreListBoxMap;
