import React from 'react';
import styled from 'styled-components';
import MypageUserInfo from './components/MypageUserInfo';
import MypageContents from './components/MypageContents';

const Mypage = () => {
  return (
    <Container>
      <MypageUserInfo />
      <MypageContents />
    </Container>
  );
};

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export default Mypage;
