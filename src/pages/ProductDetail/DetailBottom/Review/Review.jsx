import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList';

function Review() {
  return (
    <Container>
      <ReviewTitle>거래후기</ReviewTitle>
      <ReviewList />
    </Container>
  );
}

export default Review;

const Container = styled.div`
  margin-top: 50px;
`;

const ReviewTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
