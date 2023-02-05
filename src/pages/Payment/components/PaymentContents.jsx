import React from 'react';
import styled from 'styled-components';
import Address from './Contents/Address';
import Price from './Contents/Price';
import Method from './Contents/Method';

const PaymentContents = () => {
  return (
    <PaymentContentContainer>
      <Address />
      <Price />
      <Method />
    </PaymentContentContainer>
  );
};

const PaymentContentContainer = styled.div`
  margin-top: 40px;
  padding: 0 20px;
  border-top: 10px solid #f6f6f6;
`;

export default PaymentContents;
