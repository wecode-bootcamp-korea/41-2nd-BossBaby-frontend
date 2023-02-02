import React from 'react';
import styled from 'styled-components';

const CardList = ({ item }) => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <ProductImg src={item.url} alt="product" />
      </ImgWrapper>
      <Name>{item.name}</Name>
      <Price>{item.price}</Price>
    </CardWrapper>
  );
};

export default CardList;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const ProductImg = styled.img`
  width: 320px;
  height: 220px;
  border-radius: 5px;
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
