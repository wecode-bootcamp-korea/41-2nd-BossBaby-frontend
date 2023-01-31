import React from 'react';
import styled from 'styled-components';
import Img from './Img';

const Thumbnail = ({ src, alt, size }) => {
  return (
    <ThumbWrap size={size}>
      <Img src={src} alt={alt} />
    </ThumbWrap>
  );
};

const ThumbWrap = styled.div`
  overflow: hidden;
  width: ${props => props.size};
  height: ${props => props.size};
`;

export default Thumbnail;
