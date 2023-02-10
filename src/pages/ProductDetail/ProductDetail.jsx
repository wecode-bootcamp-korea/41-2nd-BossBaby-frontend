import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config';
import ProductDetailBottom from './DetailBottom/ProductDetailBottom';
import ProductDetilTop from './DetailTop/ProductDetailTop';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    fetch(`${API.products}/views/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {});
  }, []);

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
