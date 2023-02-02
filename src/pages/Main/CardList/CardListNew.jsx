import React from 'react';
import styled from 'styled-components';

const CardListNew = ({ product }) => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <ProductImg src={product.url} alt="product" />
        <ProductStatus>예약완료</ProductStatus>
      </ImgWrapper>
      <Name>상품명{product.id}</Name>
      <Price>9000원</Price>
    </CardWrapper>
  );
};

export default CardListNew;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const ProductImg = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 5px;
`;

const ProductStatus = styled.div`
  position: absolute;
  width: 70px;
  height: 25px;
  bottom: 15px;
  left: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${props => props.theme.darkGrey};
  line-height: 25px;
  text-align: center;
  font-size: 12px;
`;

const Name = styled.div`
  margin: 5px;
  font-size: 17px;
  font-weight: 500;
`;

const Price = styled.div`
  margin: 5px;
  font-size: 17px;
  font-weight: 500;
`;
