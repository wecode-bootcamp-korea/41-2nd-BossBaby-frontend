import React from 'react';
import styled from 'styled-components';
import Text from '../Common/Text';
import Title from '../Common/Title';

const Price = ({ payInfo }) => {
  const { price, point, laundry_fee, total_price } = payInfo;
  return (
    <PriceInfo>
      <Title title="결제금액" />
      <BoxInfo>
        <WrapItem>
          <Item>
            <Text text="상품금액" />
            <Text text={`${price.toLocaleString()}원`} fontWeight={700} />
          </Item>
          <Item>
            <Text text="세척비" />
            <Text text={`${laundry_fee.toLocaleString()}원`} fontWeight={700} />
          </Item>
          <Item>
            <Text text="포인트사용" />
            <Text text={`${point.toLocaleString()}원`} fontWeight={700} />
          </Item>
          <Item>
            <Text text="배송비" />
            <Text text="무료" fontWeight={700} />
          </Item>
        </WrapItem>
        <TotalPrice>
          <Item>
            <Text text="총 결제금액" fontWeight={700} />
            <Text
              text={`${total_price.toLocaleString()}원`}
              fontSize={20}
              fontWeight={700}
              color="#B8A990"
            />
          </Item>
        </TotalPrice>
      </BoxInfo>
    </PriceInfo>
  );
};

const PriceInfo = styled.div`
  padding-top: 60px;
`;

const BoxInfo = styled.div`
  margin-top: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

const WrapItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 20px 0;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalPrice = styled.div`
  margin-top: 20px;
  padding: 20px 20px 30px;
  border-top: 1px solid rgba(217, 217, 217, 0.3);
`;

export default Price;
