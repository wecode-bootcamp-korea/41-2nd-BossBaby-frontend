import React from 'react';
import styled from 'styled-components';

const Text = ({ text, color }) => {
  return <TextSpan color={color}>{text}</TextSpan>;
};

const TextSpan = styled.span`
  margin-top: 20px;
  font-size: 16px;
  color: ${props => props.color};
`;

export default Text;
