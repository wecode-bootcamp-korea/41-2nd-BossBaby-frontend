import React from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';

const ReviewList = () => {
  return (
    <List>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </List>
  );
};

const List = styled.div`
  margin-top: 35px;
`;

export default ReviewList;
