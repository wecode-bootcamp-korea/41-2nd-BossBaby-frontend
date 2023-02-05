import React from 'react';
import styled from 'styled-components';
import Title from '../Common/Title';

const Address = () => {
  return (
    <AddressInfo>
      <Title title="배송지" />
      <InputWrap>
        <InputText placeholder="배송지를 입력해주세요." />
        <InputText
          bgColor="#f6f6f6"
          placeholder="배송 요청사항을 입력해주세요."
        />
      </InputWrap>
    </AddressInfo>
  );
};

const AddressInfo = styled.div`
  padding-top: 60px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`;

const InputText = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  padding: 19px 21px;
  font-size: 15px;
  font-weight: 500;
  color: #666;
  border-radius: 5px;
  border: 1px solid ${props => props.bgColor || '#d9d9d9'};
  background-color: ${props => props.bgColor || '#fff'};
  outline: none;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border: 1px solid ${props => props.bgColor || '#999'};
  }
`;

export default Address;
