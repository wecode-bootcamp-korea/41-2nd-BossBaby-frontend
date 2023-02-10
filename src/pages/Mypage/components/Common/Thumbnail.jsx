import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img from './Img';

const Thumbnail = ({ src, alt, size }) => {
  const [user, setUser] = useState([{ username: 'abc', id: 0 }]);

  return (
    <ThumbWrap size={size}>
      {user.map(({ id, username }) => (
        <Img src={src} alt={alt} />
      ))}
    </ThumbWrap>
  );
};

const ThumbWrap = styled.div`
  overflow: hidden;
  width: ${props => props.size};
  height: ${props => props.size};
  margin-right: 15px;
  border-radius: 100%;
`;

export default Thumbnail;
