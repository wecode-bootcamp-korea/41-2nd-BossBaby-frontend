import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { API } from '../../../../config';

function Likes({ productObj, setProductObj }) {
  const { total_likes, id, likeOrNot } = productObj;

  const likeHandler = () => {
    if (localStorage.getItem('token')) {
      if (likeOrNot === '0') {
        fetch(`${API.likes}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOnsiaWQiOjN9LCJpYXQiOjE2NzU5MDkzNzB9.I7aqL2ZAFGO9iBwmzOlDly0ZRCNd7rERJIfkS1Zt4pQ',
          },
          body: JSON.stringify({
            productId: { id },
          }),
        })
          .then(res => res.json())
          .then(data => {
            const newProductObj = { ...productObj };
            newProductObj.likeOrNot = likeOrNot === '0' ? '1' : '0';
            newProductObj.total_likes = data.likes;
            setProductObj(newProductObj);
          });
      } else if (likeOrNot === '1') {
        fetch(`http://10.58.52.191:3000/products/likes/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOnsiaWQiOjN9LCJpYXQiOjE2NzU5MDkzNzB9.I7aqL2ZAFGO9iBwmzOlDly0ZRCNd7rERJIfkS1Zt4pQ',
          },
          body: JSON.stringify({ productId: { id } }),
        })
          .then(res => res.json())
          .then(data => {
            const newProductObj = { ...productObj };
            newProductObj.likeOrNot = likeOrNot === '0' ? '1' : '0';
            newProductObj.total_likes = data.likes;
            setProductObj(newProductObj);
          });
      }
    } else {
      alert('로그인 후 이용해주세요.');
    }
  };

  return (
    <Container>
      <LikeButton>
        {likeOrNot === '0' || likeOrNot === null ? (
          <FaHeart onClick={likeHandler} color="grey" width="20" height="20" />
        ) : (
          <FaHeart onClick={likeHandler} color="red" width="20" height="20" />
        )}
      </LikeButton>
      <LikeCount>{total_likes}</LikeCount>
    </Container>
  );
}

export default Likes;

const Container = styled.div`
  margin-right: 40px;
`;

const LikeButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

const LikeCount = styled.span`
  font-weight: 500;
  font-size: 20px;
`;
