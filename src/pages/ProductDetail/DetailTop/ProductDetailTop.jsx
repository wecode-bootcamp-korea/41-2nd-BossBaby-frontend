import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from './Carousel/Carousel';
import Likes from './Likes/Likes';
import Options from './Options/Options';
import { OPTION_DATA } from './Options/optionData';
import { API } from '../../../config';
const ProductDetailTop = ({ productId }) => {
  const [productObj, setProductObj] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const productInfoFetch = async () => {
      fetch(`${API.detail}/${productId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('token'),
        },
      })
        .then(res => res.json())
        .then(data => {
          setProductObj(data.productDetail[0]);
        });
    };
    productInfoFetch();
  }, []);

  const moveToPayment = () =>
    navigate('/payment', {
      state: {
        product_id: productObj.id,
        price: productObj.price,
        title: productObj.title,
        thunbnail: productObj.images,
      },
    });

  const moveTotalk = () => {
    navigate('/babeeTalk');
  };

  const handleBuy = () => {
    localStorage.getItem('token')
      ? moveToPayment()
      : alert('로그인 후 이용해주세요');
  };

  const handleBabeeTalk = () => {
    alert('오픈 준비중입니다!');
    return;

    localStorage.getItem('token')
      ? moveTotalk()
      : alert('로그인 후 이용해주세요');
  };

  return (
    <Container>
      {productObj && <Carousel images={productObj.images} />}
      {productObj && (
        <ProductContentWrapper>
          <ContentDiv>
            <ContentTopWrap>
              <LeftContent>
                <DivWrap>
                  <div className="categoryName">
                    {productObj.sub_categories}
                  </div>
                  <div className="productName">{productObj.title}</div>
                  <div className="price">
                    {parseInt(productObj.price).toLocaleString()}원
                  </div>
                </DivWrap>

                {productObj.status === 'pending' ? (
                  <ProductStatusPending>예약중</ProductStatusPending>
                ) : productObj.status === 'soldout' ? (
                  <ProductStatusDone>예약완료</ProductStatusDone>
                ) : null}
              </LeftContent>
              <RightContent>
                <Likes productObj={productObj} setProductObj={setProductObj} />
              </RightContent>
            </ContentTopWrap>
            <ContentBottomWrap>
              <OptionContainer>
                {OPTION_DATA.map(item => (
                  <Options
                    key={item.id}
                    item={item}
                    condition={productObj.condition}
                    exchangable={productObj.exchangable}
                    region={productObj.region}
                    created_at={productObj.created_at}
                  />
                ))}
              </OptionContainer>
              <ButtonWrap>
                <BabeeTalkButton onClick={handleBabeeTalk}>
                  베비톡
                </BabeeTalkButton>
                <BuyButton onClick={handleBuy}>바로구매</BuyButton>
              </ButtonWrap>
            </ContentBottomWrap>
          </ContentDiv>
        </ProductContentWrapper>
      )}
    </Container>
  );
};

export default ProductDetailTop;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 0px;
`;

const ProductContentWrapper = styled.div`
  width: 560px;
`;

const ContentDiv = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentTopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: flex-end;
`;

const DivWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  .categoryName {
  }

  .productName {
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
  }

  .price {
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
  }
`;

const ProductStatusPending = styled.div`
  width: 70px;
  height: 25px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${props => props.theme.darkGreen};
  line-height: 25px;
  text-align: center;
  font-size: 12px;
`;

const ProductStatusDone = styled.div`
  width: 70px;
  height: 25px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${props => props.theme.darkGrey};
  line-height: 25px;
  text-align: center;
  font-size: 12px;
`;

const RightContent = styled.div``;

const ContentBottomWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OptionContainer = styled.div`
  display: flex;
`;

const ButtonWrap = styled.div`
  margin-top: 30px;
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

const BabeeTalkButton = styled.button`
  width: 250px;
  height: 60px;
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
  cursor: pointer;
`;

const BuyButton = styled.button`
  width: 250px;
  height: 60px;
  border: 1px solid #d9d9d9;
  background-color: #d0c0a5;
  color: #ffffff;
  cursor: pointer;
`;
