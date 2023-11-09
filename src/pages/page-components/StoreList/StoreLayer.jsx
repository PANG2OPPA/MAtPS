import React from "react";
import StoreListBoxMap from "./StoreListBox";
import { CenterLayer, FilterContainer, FilterBox01, PeopleNum, FilterBox02, FoodCheck, FilterBox03, RegionCheck, FilterBox04, PriceCheck, FilterBox05, ParkingCheck, ListMain, StoreMainMap, CenterWord, StyledScreen, StoreListScreen } from "../../style-components/StoreList/StoreList-StoreLayer";

const StoreLayer = () => {
  return (
    <CenterLayer>
      <FilterContainer>
        <FilterBox01>
          <PeopleNum>인원수</PeopleNum>
        </FilterBox01>

        <FilterBox02>
          <FoodCheck>음식</FoodCheck>
        </FilterBox02>

        <FilterBox03>
          <RegionCheck>지역</RegionCheck>
        </FilterBox03>

        <FilterBox04>
          <PriceCheck>가격대</PriceCheck>
        </FilterBox04>

        <FilterBox05>
          <ParkingCheck>주차</ParkingCheck>
        </FilterBox05>
      </FilterContainer>

      <ListMain>
        <StoreMainMap>여기는 카카오 api 지도 넣을 자리입니다~~</StoreMainMap>

        <StyledScreen>
          <CenterWord>
            당신이 고대하던 소중한 ____자리를 위한 식당을 찾고 있습니다.
          </CenterWord>
        </StyledScreen>

        <StoreListScreen>
          <StoreListBoxMap />
        </StoreListScreen>
      </ListMain>
    </CenterLayer>
  );
};

export default StoreLayer;
