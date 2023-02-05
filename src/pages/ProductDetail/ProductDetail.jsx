import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductDetailBottom from './DetailBottom/ProductDetailBottom';
import ProductDetilTop from './DetailTop/ProductDetailTop';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;
  return (
    <Container>
      <ProductDetilTop productId={productId} />
      <ProductDetailBottom productId={productId} />
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
`;
