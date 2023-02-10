import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from '../../pages/Login/Login';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('로그인');
  const [input, setInput] = useState('');
  const isLogin = !!localStorage.getItem('token');

  const modalOpenHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    !isLogin && setTitle('로그인');
    isLogin && setTitle('마이페이지');
  }, [isLogin, location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function searchEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(
        `/productlist/search?search=${input}&sort=PRICE_ASC&offset=0&limit=12`
      );
    }
  }

  return (
    <>
      <WrapperNav>
        <NavTop>
          <StyledLinkLogo to="/">
            <LogoImg src="../images/BaBee.png" />
          </StyledLinkLogo>
          <SearchDiv>
            <SearchImg src="../images/Nav/search.png" />
            <SearchInput
              placeholder="상품명 입력"
              value={input}
              onChange={handleInput}
              onKeyPress={searchEnter}
            />
          </SearchDiv>
          <LinkDiv>
            <StyledLinkRight to="/productsell">판매하기</StyledLinkRight>
            <LinkBar>|</LinkBar>
            {!isLogin && (
              <StyledLinkSpan onClick={modalOpenHandler}>
                {title}
              </StyledLinkSpan>
            )}
            {isLogin && (
              <StyledLinkRight to="/mypage">마이페이지</StyledLinkRight>
            )}
            <LinkBar>|</LinkBar>
            <StyledLinkRight
              to="#none"
              onClick={() => alert('오픈 준비중입니다!')}
            >
              베비톡
            </StyledLinkRight>
          </LinkDiv>
          <BaBeeTalkImg src="../images/Nav/Comma.png" />
        </NavTop>
        <NavBottom>
          {CATEGORIES_LIST.map(item => (
            <StyledLinkCate
              key={item.id}
              to={`/productlist?subCategory=${item.subCategory}&sort=RECENT&offset=0&limit=12`}
            >
              {item.title}
            </StyledLinkCate>
          ))}
        </NavBottom>
      </WrapperNav>
      {isModalOpen && <Login setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

const WrapperNav = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 170px;
  padding-top: 35px;
  border-bottom: 1px solid ${props => props.theme.whiteGreyD9};
  background-color: #fff;
  z-index: 1000;
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

const StyledLinkSpan = styled.span`
  margin-left: 30px;
  cursor: pointer;
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
  { id: 1, title: '내의/속옷', subCategory: 'INNER' },
  { id: 2, title: '상의/하의', subCategory: 'TOP_BOTTOM' },
  { id: 3, title: '원피스', subCategory: 'ONE_PIECE' },
  { id: 4, title: '신발', subCategory: 'SHOES' },
  { id: 5, title: '악세사리', subCategory: 'ACCESSORY' },
  { id: 6, title: '이불/침구', subCategory: 'BEDDING' },
  { id: 7, title: '인형/모빌', subCategory: 'TOY' },
];
