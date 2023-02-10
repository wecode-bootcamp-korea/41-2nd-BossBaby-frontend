import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config';
import SelectOpt from './SelectOpt';

const Card = ({ product, setOptValue, selectOpt }) => {
  const navigate = useNavigate();
  const { id, title, thumbnail_img, price, status } = product;
  const isProductSoldout = status === 'soldout';
  const isProductSelling = status === 'selling';
  const statusOption = {
    bgColor: isProductSoldout ? '#333' : '#486344',
    text: isProductSoldout ? '판매 완료' : '예약중',
  };

  const moveToDetail = () => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <CardWrapper>
      <CardButton onClick={moveToDetail}>
        <ImgWrapper>
          <ProductImg src={thumbnail_img} alt="product" />
          {isProductSoldout && <Dimd />}
          {!isProductSelling && (
            <ProductStatus bgColor={statusOption.bgColor}>
              {statusOption.text}
            </ProductStatus>
          )}
        </ImgWrapper>
      </CardButton>
      <Name>{title}</Name>
      <Price>{parseInt(price).toLocaleString()}원</Price>
      {selectOpt && (
        <SelectOpt
          productId={product.id}
          status={status}
          setOptValue={setOptValue}
        />
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CardButton = styled.button`
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  width: 210px;
  height: 210px;
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
  overflow: hidden;
  width: 200px;
  margin: 15px 5px 9px;
  font-size: 16px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Price = styled.div`
  margin: 5px;
  font-size: 16px;
  font-weight: 500;
`;

export default Card;
