import React from 'react';
import styled from 'styled-components';
import PaymentHeader from './components/PaymentHeader';
import PaymentContents from './components/PaymentContents';

const Payment = () => {
  return (
    <PaymentContainer>
      <PaymentHeader />
      <PaymentContents />
      <ButtonWrap>
        <Button>결제하기</Button>
      </ButtonWrap>
    </PaymentContainer>
  );
};
const PaymentContainer = styled.div`
  width: 640px;
  margin: 0 auto;
  padding: 80px 0 100px;
`;

const ButtonWrap = styled.div`
  margin-top: 40px;
  padding: 40px 20px 0;
  border-top: 10px solid #f6f6f6;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #d0c0a5;
  outline: none;
  cursor: pointer;
`;
export default Payment;
