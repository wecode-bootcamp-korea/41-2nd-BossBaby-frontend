import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import RecommendList from './CardList/RecommendList';
import MainCarousel from './MainCarousel/MainCarousel';
import List from '../../components/CardList/List';
import { fetchApi, API } from '../../config';

const Main = () => {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchApi(`${API.products}/main/recommend`);
    setRecommend(data);
  };

  return (
    <MainWrapper>
      <MainCarousel />
      <MainContent>
        <div>
          <Title>오늘의 상품 추천</Title>
          <SuggestionImg>
            {recommend.length > 0 &&
              recommend.map(item => {
                return <RecommendList key={item.id} item={item} />;
              })}
          </SuggestionImg>
        </div>
        <div>
          <Title>오늘 입고 됐어요 !</Title>
          <List url={`${API.products}/main/recent`} column={4} />
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
  padding-bottom: 100px;
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
