import React from 'react';
import styled from 'styled-components';
import Title from './Common/Title';
import Thumbnail from './Common/Thumbnail';

const PaymentHeader = ({ productInfo }) => {
  const { product_id, price, thunbnail, title } = productInfo;

  return (
    <PaymentHeaderContainer>
      <Title title="결제하기" fontSize={24} />
      <ProductItem>
        <Thumbnail src={thunbnail} alt="" size={50} />
        <WrapInfo>
          <Title
            title={`${parseInt(price).toLocaleString()}원`}
            fontSize={18}
          />
          <Text>{title}</Text>
        </WrapInfo>
      </ProductItem>
      <PaymentInfo>
        <InfoTerm>거래방법</InfoTerm>
        <InfoDesc>세척요청 / 바로거래</InfoDesc>
        <InfoTerm>결제방법</InfoTerm>
        <InfoDesc>토스결제</InfoDesc>
      </PaymentInfo>
    </PaymentHeaderContainer>
  );
};

const PaymentHeaderContainer = styled.div`
  padding: 0 16px;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 30px;
`;

const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: #666;
`;

const PaymentInfo = styled.dl`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(217, 217, 217, 0.3);
`;

const InfoTerm = styled.dt`
  float: left;
  font-size: 14px;
  font-weight: bold;
  color: #b2b2b2;

  &:nth-of-type(n + 2) {
    margin-top: 8px;
  }
`;

const InfoDesc = styled.dd`
  overflow: hidden;
  padding-left: 16px;
  font-size: 14px;
  color: #333;

  &:nth-of-type(n + 2) {
    margin-top: 8px;
  }
`;

export default PaymentHeader;
