import React from 'react';
import styled from 'styled-components';

const Thumbnail = ({ src, size }) => {
  return (
    <WrapImg size={size}>
      <Img src={src} alt="유저 이미지" />
    </WrapImg>
  );
};

const WrapImg = styled.div`
  overflow: hidden;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default Thumbnail;
