import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PaymentHeader from './components/PaymentHeader';
import PaymentContents from './components/PaymentContents';
import { API, fetchApi } from '../../config';

const initialState = {
  product_id: 0,
  address: '',
  price: 0,
  point: 0,
  laundry_fee: 3000,
  total_price: 0,
};

const locationState = {
  product_id: 2,
  price: 1000,
  thumbnail: '/images/mypage/img_product.png',
  title: '아기용품 무료나눔',
};

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [payInfo, setPayInfo] = useState(initialState);
  const [productInfo, setProductInfo] = useState(
    location.state || locationState
  );
  const isLogin = !!localStorage.getItem('token');

  useEffect(() => {
    if (!isLogin) {
      alert('로그인 후 이용 가능합니다.');
      navigate('/');
    }
    fetchProductInfo();
  }, []);

  const fetchProductInfo = () => {
    if (location.state !== null) {
      const { product_id, price, thumbnail, title } = productInfo;
      const newPayInfo = { ...payInfo };

      newPayInfo.product_id = product_id;
      newPayInfo.price = parseInt(price);
      newPayInfo.total_price =
        parseInt(price) + payInfo.point + payInfo.laundry_fee;
      setPayInfo(newPayInfo);
    }
  };

  const handlePayment = async () => {
    const fetchData = {
      address: payInfo.address,
      totalprice: payInfo.total_price,
      productId: payInfo.product_id,
    };
    const result = await fetchApi(`${API.orders}`, 'POST', fetchData, true);
    if (result.message === 'ORDER_SUCCESS') {
      alert('결제 성공!');
      navigate('/');
    }
  };

  return (
    <PaymentContainer>
      {productInfo && <PaymentHeader productInfo={productInfo} />}
      <PaymentContents payInfo={payInfo} setPayInfo={setPayInfo} />
      <ButtonWrap>
        <Button onClick={handlePayment}>결제하기</Button>
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
