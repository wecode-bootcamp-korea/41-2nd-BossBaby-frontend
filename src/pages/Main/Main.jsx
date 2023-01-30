import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardList from './CardList/CardList';
import CardListNew from './CardList/CardListNew';
import MainCarousel from './MainCarousel/MainCarousel';
import MAIN_DATA from './CardList/MainData.jsx';

const Main = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <MainWrapper>
      <MainCarousel />
      <MainContent>
        <div>
          <Title>오늘의 상품 추천</Title>
          <SuggestionImg>
            {MAIN_DATA.map(item => {
              return <CardList key={item.id} item={item} />;
            })}
          </SuggestionImg>
        </div>
        <div>
          <Title>오늘 입고 됐어요 !</Title>
          <TodayNewImg>
            {productList.map(product => {
              return <CardListNew key={product.id} product={product} />;
            })}
          </TodayNewImg>
        </div>
      </MainContent>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100%;
`;

const MainContent = styled.div`
  width: 1024px;
  margin: auto;
`;

const Title = styled.div`
  margin: 70px 0 30px;
  color: ${props => props.theme.darkGrey};
  font-size: 25px;
  font-weight: 700;
`;

const SuggestionImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;

const TodayNewImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  place-items: center;
  margin: 0 auto;
`;
