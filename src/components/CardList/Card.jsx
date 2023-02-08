import React from 'react';
import styled from 'styled-components';
import SelectOpt from './SelectOpt';

const Card = ({ product, selectOpt }) => {
  const { id, title, thumbnail_img, price, status } = product;
  const isProductSoldout = status === 'soldout';
  const isProductSelling = status === 'selling';
  const statusOption = {
    bgColor: isProductSoldout ? '#333' : '#486344',
    text: isProductSoldout ? '판매 완료' : '예약중',
  };

  return (
    <CardWrapper>
      <ImgWrapper>
        <ProductImg src={thumbnail_img} alt="product" />
        {isProductSoldout && <Dimd />}
        {!isProductSelling && (
          <ProductStatus bgColor={statusOption.bgColor}>
            {statusOption.text}
          </ProductStatus>
        )}
      </ImgWrapper>
      <Name>{title}</Name>
      <Price>{parseInt(price).toLocaleString()}원</Price>
      {selectOpt && <SelectOpt status={status} />}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`;

const ProductImg = styled.img`
  width: 210px;
  height: 210px;
  vertical-align: top;
`;

const Dimd = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
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
  background-color: ${props => props.bgColor};
  line-height: 25px;
  text-align: center;
  font-size: 12px;
`;

const Name = styled.div`
  margin: 10px 5px 5px;
  font-size: 16px;
  font-weight: 400;
`;

const Price = styled.div`
  margin: 5px;
  font-size: 16px;
  font-weight: 500;
`;

export default Card;
