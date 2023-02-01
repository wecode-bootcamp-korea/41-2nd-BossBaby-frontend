import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductList = ({ hasSelect }) => {
  return (
    <List>
      <ProductCard hasSelect={hasSelect} />
      <ProductCard hasSelect={hasSelect} />
      <ProductCard hasSelect={hasSelect} />
      <ProductCard hasSelect={hasSelect} />
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
`;

export default ProductList;
