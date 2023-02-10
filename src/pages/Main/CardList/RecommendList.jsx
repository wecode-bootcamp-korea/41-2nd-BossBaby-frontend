import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecommendList = ({ item }) => {
  const { id, title, price, status, thumbnail_img } = item;
  const isProductSoldout = status === 'soldout';
  const isProductSelling = status === 'selling';
  const statusOption = {
    bgColor: isProductSoldout ? '#333' : '#486344',
    text: isProductSoldout ? '판매 완료' : '예약중',
  };

  return (
    <CardWrapper>
      <CardLink to={`/productDetail/${id}`}>
        <ImgWrapper>
          <ProductImg src={thumbnail_img} alt="product" />
          {isProductSoldout && <Dimd />}
          {!isProductSelling && (
            <ProductStatus bgColor={statusOption.bgColor}>
              {statusOption.text}
            </ProductStatus>
          )}
        </ImgWrapper>
      </CardLink>
      <Name>{title}</Name>
      <Price>{parseInt(price).toLocaleString()}원</Price>
    </CardWrapper>
  );
};

export default RecommendList;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const ProductImg = styled.img`
  width: 320px;
  height: 220px;
  border-radius: 5px;
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
  margin: 5px;
  font-size: 17px;
  font-weight: 500;
`;

const Price = styled.div`
  margin: 5px;
  font-size: 17px;
  font-weight: 500;
`;
