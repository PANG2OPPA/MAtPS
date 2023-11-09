// store page - components들 종합해서 App.js
import { Container, StoreName, StoreDetail, Bar, WishList } from "../../style_components/Store/Store-Info";
import wish from '../../../images/heart.png';

const StoreInfo = () => {
    return (
        <Container>
            <StoreName>을지다락 강남</StoreName>
            <StoreDetail>900 view</StoreDetail>
            <StoreDetail>★★★★★(30)</StoreDetail>
            <Bar></Bar>
            <StoreDetail>11:30~21:10</StoreDetail>
            <StoreDetail>서울 강남구 강남대로96길 22 2층</StoreDetail>
            <StoreDetail>0507-1343-9474</StoreDetail>
            <StoreDetail>음식 종류 : 국수</StoreDetail>
            <StoreDetail>주차 여부 : 주차불가</StoreDetail>
            <WishList src={wish}></WishList>
        </Container>
    );
};

export default StoreInfo;