import React from 'react';
import styled from 'styled-components';

const Img = ({ src, alt = '이미지' }) => {
  return <Thumb src={src} alt={alt} />;
};

const Thumb = styled.img`
  width: 100%;
  height: 100%;
`;

export default Img;
