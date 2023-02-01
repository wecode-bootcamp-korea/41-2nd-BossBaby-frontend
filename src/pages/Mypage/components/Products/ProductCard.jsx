import React from 'react';
import styled from 'styled-components';
import Img from '../Common/Img';
import SelectOpt from '../Common/SelectOpt';

const ProductCard = ({ title, thumbnail, desc, price, hasSelect }) => {
  return (
    <Card>
      <ImgWrap>
        <Img src="/images/mypage/img_product.png" alt="제품 사진" />
      </ImgWrap>
      <ProductInfo>
        <Text>6750 자라키즈/여아/인조퍼...</Text>
        <Price>8,000 원</Price>
        {hasSelect && <SelectOpt />}
      </ProductInfo>
    </Card>
  );
};

const Card = styled.div`
  & + & {
    margin-left: 20px;
  }
  &:nth-child(n + 4) {
    margin-top: 20px;
  }
  &:nth-child(3n + 1) {
    margin-left: 0;
  }
`;

const ImgWrap = styled.div`
  width: 200px;
  height: 200px;
`;

const ProductInfo = styled.div`
  position: relative;
`;

const Text = styled.p`
  margin-top: 16px;
  font-size: 14px;
`;

const Price = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
`;

export default ProductCard;
