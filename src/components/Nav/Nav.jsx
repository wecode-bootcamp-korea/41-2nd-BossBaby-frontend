import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  const isLogin = !!localStorage.getItem('token');

  return (
    <WrapperNav>
      <NavTop>
        <StyledLinkLogo to="/">
          <LogoImg src="../images/BaBee.png" />
        </StyledLinkLogo>
        <SearchDiv>
          <SearchImg src="../images/Nav/search.png" />
          <SearchInput placeholder="상품명 입력" />
        </SearchDiv>
        <LinkDiv>
          <StyledLinkRight to="/productsell">판매하기</StyledLinkRight>
          <LinkBar>|</LinkBar>
          {!isLogin && <StyledLinkRight to="/login">로그인</StyledLinkRight>}
          {isLogin && (
            <StyledLinkRight to="/mypage">마이페이지</StyledLinkRight>
          )}
          <LinkBar>|</LinkBar>
          <StyledLinkRight to="/babeeTalk">베비톡</StyledLinkRight>
        </LinkDiv>
        <BaBeeTalkImg src="../images/Nav/Comma.png" />
      </NavTop>
      <NavBottom>
        {CATEGORIES_LIST.map(item => (
          <StyledLinkCate to="/" key={item.id}>
            {item.title}
          </StyledLinkCate>
        ))}
      </NavBottom>
    </WrapperNav>
  );
};

const WrapperNav = styled.div`
  position: sticky;
  height: 146px;
  padding-top: 35px;
  border-bottom: 1px solid ${props => props.theme.whiteGreyD9};
`;
const NavTop = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
const LogoImg = styled.img`
  width: 95px;
  height: 25px;
  margin-right: 140px;
  margin-top: 5px;
`;
const SearchDiv = styled.div`
  width: 460px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 15px;
  background-color: #f7f8f9;
`;
const SearchInput = styled.input`
  width: 410px;
  height: 16px;
  border: none;
  background-color: #f7f8f9;
  text-align: left;
  letter-spacing: -0.5px;
  :focus {
    outline: none;
  }
`;
const SearchImg = styled.img`
  width: 20px;
  height: 20px;
`;
const StyledLinkLogo = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.darkGrey};
`;
const LinkDiv = styled.div`
  display: flex;
  margin-top: 12px;
  margin-left: 15px;
`;
const StyledLinkRight = styled(Link)`
  position: relative;
  display: flex;
  margin-left: 30px;
  text-decoration: none;
  color: ${props => props.theme.darkGrey};
`;
const LinkBar = styled.p`
  margin-left: 25px;
  color: ${props => props.theme.whiteGreyD9};
`;
const BaBeeTalkImg = styled.img`
  width: 15px;
  height: 20px;
  margin-top: -6px;
`;
const NavBottom = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-top: 45px;
`;
const StyledLinkCate = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.darkGrey};
`;
export default Nav;

const CATEGORIES_LIST = [
  { id: 1, title: '내의/속옷' },
  { id: 2, title: '상의/하의' },
  { id: 3, title: '원피스' },
  { id: 4, title: '신발' },
  { id: 5, title: '악세사리' },
  { id: 6, title: '이불/침구' },
  { id: 7, title: '인형/모빌' },
];
