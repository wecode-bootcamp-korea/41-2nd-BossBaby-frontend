import React, { useEffect } from 'react';
import styled from 'styled-components';
import MypageUserInfo from './components/MypageUserInfo';
import MypageContents from './components/MypageContents';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const navigate = useNavigate();
  const isLogin = !!localStorage.getItem('token');

  useEffect(() => {
    isLogin ? navigate('/mypage/reviews') : navigate('/');
  }, []);

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
