import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

const Room = ({ src, nickname, desc }) => {
  return (
    <RoomItemButton>
      <Thumbnail size="46px" src={src} />
      <div>
        <Title>{nickname}</Title>
        <Text>{desc}</Text>
      </div>
    </RoomItemButton>
  );
};

const RoomItemButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 30px;
  border: none;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
`;

const Title = styled.strong`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

const Text = styled.p`
  margin-top: 4px;
  font-size: 13px;
  font-weight: medium;
  color: #999;
`;

export default Room;
