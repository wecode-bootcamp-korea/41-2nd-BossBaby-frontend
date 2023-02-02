import React from 'react';
import styled from 'styled-components';

const Description = ({ sellList, handleSellList }) => {
  return (
    <DetailDiv>
      <DetailTextarea
        type="text"
        name="description"
        onChange={handleSellList}
        value={sellList.description}
        placeholder="여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등
        구매자에게 필요한 정보를 꼭 포함해 주세요. (10자 이상)&#13;&#10;안전하고 건전한 거래 환경을 위해 과학기술정보통신부,
        한국인터넷진흥원과 BaBee(주)가 함께 합니다."
      />
      <DetailCount>{sellList.description.length}/2000</DetailCount>
    </DetailDiv>
  );
};

export default Description;

const DetailDiv = styled.div`
  position: relative;
`;

const DetailTextarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 350px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.whiteGreyD9};
  padding: 15px 0 0 15px;
  &::placeholder {
    color: ${props => props.theme.whiteGreyD9};
  }
`;

const DetailCount = styled.span`
  position: absolute;
  bottom: 15px;
  right: 20px;
  color: ${props => props.theme.darkGrey};
`;
