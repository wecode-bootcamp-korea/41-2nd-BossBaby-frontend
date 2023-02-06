import React from 'react';
import styled from 'styled-components';

const Text = ({ text, fontSize, fontWeight, color }) => {
  return (
    <TextSpan fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {text}
    </TextSpan>
  );
};

const TextSpan = styled.span`
  font-size: ${props => props.fontSize || 16}px;
  font-weight: ${props => props.fontWeight || 400};
  color: ${props => props.color || '#666'};
`;

export default Text;
