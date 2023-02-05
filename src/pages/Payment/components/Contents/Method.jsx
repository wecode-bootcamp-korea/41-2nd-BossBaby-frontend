import React from 'react';
import styled from 'styled-components';
import Text from '../Common/Text';
import Title from '../Common/Title';

const Method = () => {
  return (
    <MethodInfo>
      <Title title="결제수단" />
      <WrapItem>
        <Button>
          <Item>
            <Text text="최근결제" color="#999" fontSize={13} fontWeight={700} />
            <Text text="토스페이" color="#333" fontSize={20} fontWeight={700} />
            <PositionText>선택</PositionText>
          </Item>
        </Button>
      </WrapItem>
    </MethodInfo>
  );
};

const MethodInfo = styled.div`
  padding-top: 60px;
`;

const WrapItem = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0;
  border: none;
  background-color: transparent;
  text-align: left;
  outline: none;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 10px;
  padding: 30px 20px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

const PositionText = styled.span`
  position: absolute;
  right: 16px;
  top: 48px;
  font-size: 13px;
  font-weight: bold;
  color: #b8a990;
`;

export default Method;
