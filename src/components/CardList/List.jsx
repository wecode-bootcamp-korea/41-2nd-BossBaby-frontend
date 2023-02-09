import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from './Card';

const List = ({ url, column, selectOpt }) => {
  const [products, setProducts] = useState([]);
  const isMypage = url.includes('/mypage');

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOnsiaWQiOjN9LCJpYXQiOjE2NzU5MDkzNzB9.I7aqL2ZAFGO9iBwmzOlDly0ZRCNd7rERJIfkS1Zt4pQ',
      },
    })
      .then(res => res.json())
      .then(data => {
        isMypage ? setProducts(data.products) : setProducts(data);
      });
  }, []);

  const setOptValue = (selectedStatus, productId) => {
    console.log('상태변경실행!', selectedStatus, productId);

    fetch('productStatus Change Url', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        productId: 0,
        status: selectedStatus,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });

    const newProducts = products.map(item => {
      if (item.id === productId) {
        return {
          ...item,
          status: selectedStatus,
        };
      }

      return item;
    });
    setProducts(newProducts);
  };

  return (
    <ListWrapper column={column}>
      {products.length > 0 &&
        products.map(product => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              selectOpt={selectOpt}
              setOptValue={setOptValue}
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
