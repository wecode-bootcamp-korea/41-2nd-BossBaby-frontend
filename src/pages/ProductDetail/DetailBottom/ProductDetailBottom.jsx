import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Review from './Review/Review';
import Thumbnail from '../../Mypage/components/Common/Thumbnail';
import { fetchApi } from '../../../config';
import { API } from '../../../config';

function ProductDetailBottom({ productId }) {
  const [sellerInfos, setSellerInfos] = useState({});
  const [detailInfo, setDetailInfo] = useState({});

  useEffect(() => {
    const productInfoFetch = async () => {
      const data = await fetchApi(`${API.seller}/${productId}`);

      setSellerInfos(data.sellerInfo[0]);
    };
    productInfoFetch();
  }, []);

  useEffect(() => {
    const productDetailFetch = async () => {
      const data = await fetchApi(`${API.detail}/${productId}`);

      setDetailInfo(data.productDetail[0]);
    };
    productDetailFetch();
  }, [productId]);

  return (
    <Container>
      {detailInfo && (
        <ProductInfoWrap>
          <ProductInfoTitle>상품 정보</ProductInfoTitle>
          {sellerInfos && <ProductInfo>{detailInfo.description}</ProductInfo>}
        </ProductInfoWrap>
      )}
      <SellerInfoWrap>
        <SellerInfo>판매자 정보</SellerInfo>
        {sellerInfos && (
          <ProfileWrap>
            <Thumbnail
              src={sellerInfos.profile_image}
              alt="유저 이미지"
              size="54px"
            />
            <ProfileName>{sellerInfos.name}</ProfileName>
          </ProfileWrap>
        )}
      </SellerInfoWrap>
      <Review />
    </Container>
  );
}

export default ProductDetailBottom;

const Container = styled.div`
  width: 100%;
`;

const ProductInfoWrap = styled.div`
  margin-top: 50px;
`;

const ProductInfoTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const ProductInfo = styled.div`
  margin-top: 40px;
`;

const SellerInfoWrap = styled.div`
  margin-top: 50px;
`;

const SellerInfo = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
const ProfileWrap = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
`;

const ProfileName = styled.div``;
