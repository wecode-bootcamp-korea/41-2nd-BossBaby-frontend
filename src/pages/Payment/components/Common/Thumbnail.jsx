import React from 'react';
import styled from 'styled-components';

const Thumbnail = ({ size, src, alt }) => {
  return (
    <ThumbWrap size={size}>
      <Img src={src} alt={alt} />
    </ThumbWrap>
  );
};

const ThumbWrap = styled.div`
  overflow: hidden;
  width: ${props => props.size || 50}px;
  height: ${props => props.size || 50}px;
  border-radius: 5px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default Thumbnail;
