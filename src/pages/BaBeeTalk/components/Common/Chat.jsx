import React from 'react';
import styled from 'styled-components';

const Chat = ({ isMyMsg, content }) => {
  return (
    <Message isMyMsg={isMyMsg}>
      <Content isMyMsg={isMyMsg}>{content}</Content>
      <TimeText>오전 11:28</TimeText>
    </Message>
  );
};

const Message = styled.div`
  display: flex;
  flex-direction: ${props => (props.isMyMsg ? 'row-reverse' : 'row')};
  align-items: flex-end;
  gap: 10px;

  & + & {
    margin-top: 20px;
  }
`;

const Content = styled.span`
  display: block;
  padding: 14px 18px;
  font-size: 15px;
  line-height: 19px;
  border: 1px solid ${props => (props.isMyMsg ? '#f7f7f7' : '#D9D9D9')};
  border-radius: 26px;
  background-color: ${props => (props.isMyMsg ? '#f7f7f7' : '#fff')};
  white-space: pre-line;
`;

const TimeText = styled.span`
  width: 58px;
  font-size: 12px;
  color: #ccc;
`;

export default Chat;
