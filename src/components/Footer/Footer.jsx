import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterListBox>
        <FooterList>
          <FooterListSpan>회사소개</FooterListSpan>
          <FooterListSpan>|</FooterListSpan>
          <FooterListSpan>이용약관</FooterListSpan>
          <FooterListSpan>|</FooterListSpan>
          <FooterListSpan>운영정책</FooterListSpan>
          <FooterListSpan>|</FooterListSpan>
          <FooterListSpan>개인정보처리방침</FooterListSpan>
          <FooterListSpan>|</FooterListSpan>
          <FooterListSpan>청소년보호정책</FooterListSpan>
        </FooterList>
      </FooterListBox>
      <FooterInnerWrapper>
        <FooterMainWrapper>
          <FooterMainBoxRight>
            <FooterTitle>BaBee(주) 사업자정보</FooterTitle>
            <RightBox>
              <FooterSpan>대표이사 : 김상헌, 정다경</FooterSpan>
              <Divide>|</Divide>
              <FooterSpan>개인정보보호책임자 : 김동규</FooterSpan>
            </RightBox>
            <RightBox>
              <FooterSpan>사업자등록번호 : 123-45-7890</FooterSpan>
              <Divide>|</Divide>
              <FooterSpan>통신판매업신고 : 2019-서울특별시-1234</FooterSpan>
            </RightBox>
            <FooterP>호스팅서비스 제공자 : Amajhone Web Services(AWS)</FooterP>
            <RightBox>
              <FooterSpan>EMAIL : baby@babee.co.kr</FooterSpan>
              <Divide>|</Divide>
              <FooterSpan>FAX : 02-123-4567</FooterSpan>
            </RightBox>
            <FooterP>
              주소 : 서울특별시 강남구 삼성동 143-40 위워크타워 1층
            </FooterP>
            <RightUnderline>사업자정보 확인</RightUnderline>
            <RightBox>
              <BoldWorkSpace>BaBee(주) 예윤이네집</BoldWorkSpace>
              <Divide>|</Divide>
              <FooterSpan>심예윤, 정다경</FooterSpan>
              <Divide>|</Divide>
              <FooterSpan>123-45-67890</FooterSpan>
              <FooterP>서울특별시 강남구 삼성동 143-40 위워크타워 1층</FooterP>
              <BoldWorkSpace>BaBee(주) 지환이네집</BoldWorkSpace>
              <Divide>|</Divide>
              <FooterSpan>김지환, 이다혜</FooterSpan>
              <Divide>|</Divide>
              <FooterSpan>123-45-67890</FooterSpan>
              <FooterP>
                서울특별시 강남구 삼성동 143-40 위워크타워 뒤 어딘가
              </FooterP>
              <BoldWorkSpace>BaBee(주) 동규네집</BoldWorkSpace>
              <Divide>|</Divide>
              <FooterSpan>김동규, 김상헌</FooterSpan>
              <Divide>|</Divide>
              <FooterSpan>123-45-67890</FooterSpan>
              <FooterP>
                서울특별시 강남구 삼성동 143-40 위워크타워 앞 어딘가
              </FooterP>
            </RightBox>
          </FooterMainBoxRight>
          <FooterMainBoxLeft>
            <RightBox>
              <FooterTitle>{`고객센터 >`}</FooterTitle>
            </RightBox>
            <FooterPhoneNum>1234-5678</FooterPhoneNum>
            <FooterP>
              운영시간 9시 - 18시 (주말/공휴일 휴무, 점심시간 12시-13시)
            </FooterP>
            <Underline>공지사항</Underline>
            <Underline>1:1 문의하기</Underline>
            <Underline>자주 묻는 질문</Underline>
            <FooterBankTitle>다경은행 채무지급보증 안내</FooterBankTitle>
            <FooterSpan>
              BaBee(주)는 "BABY Digital", "BABY Lab1", "BABY Lab2", "BABY컬렉션"
              상점이 판매한 상품에 한해, 고객님이 현금 결제한 금액에 대해
              다경은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고
              있습니다.
            </FooterSpan>
            <FooterP>서비스 가입사실 확인</FooterP>
            <FooterP>BaBee. Inc All rights reserved.</FooterP>
          </FooterMainBoxLeft>
        </FooterMainWrapper>
        <FooterBottomWrapper>
          <FooterBottomImg src="./images/BaBee.png" />
          <FooterBottomBox>
            <FooterP>
              [인증범위] BaBee 중고거래 플랫폼 서비스 운영(심사받지 않은 물리적
              인프라 제외)
            </FooterP>
            <FooterP>[유효기간] 2023.02.07 ~ 2023.03.07</FooterP>
          </FooterBottomBox>
          <FooterBottomBoxLeft>
            <FooterSpan>
              "BABY Digital", "BABY Lab1", "BABY Lab2", "BABY컬렉션" 상점의
              판매상품을 제외한 모든 상품들에 대하여, BaBee(주)는
              통신판매중개자로서 중고거래마켓 BaBee의 거래당사자가 아니며,
              입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.
            </FooterSpan>
          </FooterBottomBoxLeft>
        </FooterBottomWrapper>
      </FooterInnerWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-color: ${props => props.theme.darkGrey};
  background-color: #fff;
  line-height: 30px;
  z-index: 1000;
  color: #333333;
`;

const FooterListBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
`;

const FooterInnerWrapper = styled.div`
  width: 80%;
`;

const FooterList = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  margin-left: 9.5%;
`;

const FooterListSpan = styled.span`
  font-size: 16px;
  letter-spacing: -0.5px;
  text-align: center;
  padding: 10px;
`;

const FooterSpan = styled.span`
  font-size: 12px;
  letter-spacing: -0.5px;
  text-align: center;
`;

const FooterP = styled.p`
  font-size: 12px;
  letter-spacing: -0.5px;
  line-height: 1;
`;

const FooterMainWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px 0;
`;

const FooterMainBoxRight = styled.div`
  width: 48%;
`;

const FooterMainBoxLeft = styled.div`
  width: 48%;
`;

const FooterTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const RightBox = styled.div`
  /* height: 20px; */
`;

const Divide = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`;

const FooterPhoneNum = styled.p`
  font-size: 25px;
  font-weight: 500;
`;

const BoldWorkSpace = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

const RightUnderline = styled.p`
  text-decoration: underline;
  margin-bottom: 20px;
  font-size: 14px;
`;

const Underline = styled.span`
  text-decoration: underline;
  margin-bottom: 20px;
  margin-right: 10px;
  font-size: 14px;
`;

const FooterBankTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
`;

const FooterBottomWrapper = styled.div`
  display: flex;
  height: 120px;
  border-top: 1px solid #d9d9d9;
  margin-top: 20px;
`;

const FooterBottomImg = styled.img`
  width: 80px;
  height: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

const FooterBottomBox = styled.div`
  width: 48%;
  margin-top: 20px;
  margin-right: 20px;
`;

const FooterBottomBoxLeft = styled.div`
  width: 48%;
  margin-top: 20px;
`;
export default Footer;
