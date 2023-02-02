import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from './Card';

const List = ({ column, selectOpt }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <ListWrapper column={column}>
      {products.map(product => {
        return (
          <ProductCard
            key={product.productid}
            product={product}
            selectOpt={selectOpt}
          />
        );
      })}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => '1fr '.repeat(props.column)};
  grid-gap: 40px;
  place-items: center;
  margin: 35px auto 0;
`;

export default List;
