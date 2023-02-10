import React from 'react';
import styled from 'styled-components';
import { API_KEY, REDIRECT_URI } from './oauthConfig';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;

const Login = ({ setIsModalOpen }) => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <Container onClick={closeModal}>
      <Wrapper onClick={e => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>
          <CloseImage src="/images/Login/close.png" alt="로그인창 닫기" />
        </CloseButton>
        <LoginContentWrap>
          <Section>
            <Logo src="/images/BaBee.png" alt="BaBee 로고" />
            <Title>중고거래 시작하기</Title>
            <Describtion>간편하게 가입하고 상품을 확인하세요</Describtion>
          </Section>
          <KakaoWrap onClick={handleLogin}>
            <KakaoIcon src="/images/Login/kakaoIcon.png" />
            <KakaoText>카카오로 이용하기</KakaoText>
          </KakaoWrap>
          <FooterWrap>
            <FooterSpan>도움이 필요하면 이메일로 문의 부탁드립니다.</FooterSpan>
            <FooterSpan2>
              운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
            </FooterSpan2>
          </FooterWrap>
        </LoginContentWrap>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: fixed;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
const Wrapper = styled.div`
  position: relative;
  width: 426px;
  height: 487px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 32px;
  z-index: 1010;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #f7f7f7;
  border: none;
  cursor: pointer;
`;

const CloseImage = styled.img`
  width: 32px;
  height: 32px;
  background-color: #f7f7f7;
`;

const LoginContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Logo = styled.img`
  width: 120px;
  margin-top: 10px;
`;

const Title = styled.span`
  margin-top: 30px;
  font-weight: bold;
  font-size: 32px;
`;

const Describtion = styled.span`
  margin-top: 20px;
  font-size: 16px;
`;

const KakaoWrap = styled.button`
  position: relative;
  display: flex;
  height: 48px;
  width: 338px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: none;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  position: absolute;
  height: 26px;
  width: 26px;
  left: 35px;
`;

const KakaoText = styled.span``;

const FooterWrap = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  border-top: 1px solid #d9d9d9;
`;

const FooterSpan = styled.p`
  margin-top: 20px;
  color: #afa4a4;
  font-size: 12px;
`;

const FooterSpan2 = styled.p`
  margin-top: 3px;
  color: #afa4a4;
  font-size: 12px;
`;
