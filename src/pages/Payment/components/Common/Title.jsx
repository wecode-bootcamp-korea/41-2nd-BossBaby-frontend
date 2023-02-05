import React from 'react';
import styled from 'styled-components';

const Title = ({ fontSize, title }) => {
  return <TitleStrong fontSize={fontSize}>{title}</TitleStrong>;
};

const TitleStrong = styled.strong`
  display: block;
  font-size: ${props => props.fontSize || 20}px;
  font-weight: bold;
`;

export default Title;
