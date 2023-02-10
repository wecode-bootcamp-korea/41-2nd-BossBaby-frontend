import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Common/Thumbnail';
import Message from './Common/Chat';

const Chats = () => {
  return (
    <ChatRoomContainer>
      <ChatRoomHeader>
        <Img src="/images/BaBee.png" alt="" width={69} height={20} />
        <Img src="/images/more.png" alt="" width={24} />
      </ChatRoomHeader>
      <ChatRoomBody>
        <UserInfo>
          <Thumbnail src="https://via.placeholder.com/150" size="70px" />
          <Title>김지환지환</Title>
          <Text>지금까지 25개의 상품을 판매했어요.</Text>
        </UserInfo>
        <Contents>
          {MOCK_CONTENT_DATA.map((content, index) => {
            return (
              <Message key={content} isMyMsg={index === 0} content={content} />
            );
          })}
        </Contents>
      </ChatRoomBody>
      <FormContainer>
        <Form onSubmit={e => e.preventDefault()}>
          <Button>더</Button>
          <BoxTextArea>
            <Textarea>{/* 메시지 입력란 */}</Textarea>
            <WrapButton>
              <InputButton>
                <Img src="/images/smile.png" alt="" width={24} />
              </InputButton>
              <InputButton>포</InputButton>
            </WrapButton>
          </BoxTextArea>
        </Form>
      </FormContainer>
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  position: relative;
  width: 47%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

const ChatRoomHeader = styled.div`
  display: flex;
  padding: 30px 30px 20px;
  justify-content: space-between;
`;

const Img = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const ChatRoomBody = styled.div`
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  height: calc(100% - 168px);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.strong`
  display: block;
  padding-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

const Text = styled.p`
  padding-top: 12px;
  font-size: 14px;
  color: #999;
`;

const Contents = styled.div`
  padding: 30px 30px 20px;
`;

// Input Form
const FormContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #d9d9d9;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  gap: 20px;
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
`;

const WrapButton = styled.div`
  position: absolute;
  display: flex;
  top: 30px;
  right: 36px;
  gap: 6px;
`;

const InputButton = styled(Button)``;

const BoxTextArea = styled.div`
  flex-grow: 1;
  padding: 14px 0;
  padding-right: 60px;
  border-radius: 32px;
  background-color: #f7f7f7;
`;

// Shift + Enter => 높이값 변경
const Textarea = styled.textarea.attrs({
  placeholder: '메세지를 입력하세요.',
})`
  width: 100%;
  height: 19px;
  padding: 0 0 0 18px;
  color: #333;
  border: none;
  background-color: #f7f7f7;
  outline: none;
  resize: none;
  appearance: none;
  vertical-align: top;
  caret-color: #d9d9d9;

  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: #b2b2b2;
  }
`;

export default Chats;

const MOCK_CONTENT_DATA = [
  `안녕하세요 응애입니다 혹시 유모차 팔렸나요? 네고 80% 해주세욥`,
  '싫습니다. 돌아가세요.',
];
