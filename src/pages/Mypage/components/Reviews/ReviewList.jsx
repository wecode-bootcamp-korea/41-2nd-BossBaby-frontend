import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../../config';
import ReviewCard from './ReviewCard';

const initialState = {
  id: 1,
  review_details: '',
  grade: 4,
  nickname: '',
  images: [],
};

const ReviewList = () => {
  const [reviews, setReviews] = useState(initialState);

  useEffect(() => {
    fetch(`${API.mypage}/seller/reviews`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setReviews(data.sellerReviews);
      });
  }, []);

  return (
    <ReviewListContainer>
      {reviews.length > 0 ? (
        reviews.map(review => {
          return <ReviewCard key={review.id} review={review} />;
        })
      ) : (
        <p>리뷰가 존재하지 않습니다.</p>
      )}
    </ReviewListContainer>
  );
};

const ReviewListContainer = styled.div`
  margin-top: 35px;
`;

export default ReviewList;
