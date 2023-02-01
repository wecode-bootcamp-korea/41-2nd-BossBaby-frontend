import React from 'react';
import styled from 'styled-components';
import Rooms from './components/Rooms';
import Chats from './components/Chats';

const BaBeeTalk = () => {
  return (
    <TalkContainer>
      <Rooms />
      <Chats />
    </TalkContainer>
  );
};

const TalkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  height: 940px;
  margin: 0 auto;
  padding: 20px 0;
`;

export default BaBeeTalk;
