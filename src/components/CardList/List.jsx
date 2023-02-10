import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../config';
import ProductCard from './Card';

const List = ({ url, column, selectOpt }) => {
  const [products, setProducts] = useState([]);
  const isMypage = url.includes('/mypage');

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        isMypage ? setProducts(data.products) : setProducts(data);
        console.log(data);
      });
  }, [url]);

  const setOptValue = (selectedStatus, productId) => {
    fetch(`${API.mypage}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        productId,
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
      {products.length > 0 ? (
        products.map(product => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              selectOpt={selectOpt}
              setOptValue={setOptValue}
            />
          );
        })
      ) : (
        <p>리스트가 존재하지 않습니다.</p>
      )}
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
