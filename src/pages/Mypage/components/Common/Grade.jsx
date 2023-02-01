import React from 'react';
import styled from 'styled-components';

const Grade = ({ stars }) => {
  return (
    <GradeContainer>
      <GradeColor stars={stars} />
    </GradeContainer>
  );
};

const GradeContainer = styled.span`
  display: inline-block;
  width: 120px;
  height: 24px;
  background: url('/images/mypage/img_star.png') 0 0 no-repeat;
  background-size: cover;
  text-align: left;
`;

const GradeColor = styled(GradeContainer)`
  width: ${props => props.stars * 20 || 0}%;
  background: url('/images/mypage/img_star_on.png') 0 0 no-repeat;
  background-size: cover;
`;

export default Grade;
