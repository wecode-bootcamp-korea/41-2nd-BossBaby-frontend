import React from 'react';
import styled from 'styled-components';

const Title = ({ title, size, weight }) => {
  return (
    <TitleStrong size={size} weight={weight}>
      {title}
    </TitleStrong>
  );
};

const TitleStrong = styled.strong`
  display: block;
  font-size: ${props => props.size || '26px'};
  font-weight: ${props => props.weight || 'bold'};
`;

export default Title;
