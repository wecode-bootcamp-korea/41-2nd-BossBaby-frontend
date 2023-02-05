import React from 'react';
import styled from 'styled-components';
import Grade from '../../../Mypage/components/Common/Grade';
import Thumbnail from '../../../Mypage/components/Common/Thumbnail';
import Img from '../../../Mypage/components/Common/Img';
import Title from '../../../Mypage/components/Common/Title';

const ReviewCard = () => {
  return (
    <ReviewContainer>
      <ReviewHeader>
        <UserInfo>
          <Thumbnail
            src="/images/mypage/thumb.png"
            alt="유저 이미지"
            size="54px"
          />
          <Title title="중고거래왕" size="18px" weight="normal" />
        </UserInfo>
        <Grade stars={3} />
      </ReviewHeader>
      <ReviewBody>
        <ImgList>
          {MOCK_REVIEW_IMAGES.map((src, index) => (
            <WrapImg key={index}>
              <Img src={src} />
            </WrapImg>
          ))}
        </ImgList>
        <p style={{ marginTop: '24px' }}>리뷰 최고</p>
      </ReviewBody>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  width: 720px;
  padding: 22px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  & + & {
    margin-top: 30px;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewBody = styled.div`
  padding-top: 20px;
`;

const ImgList = styled.div`
  display: flex;
`;

const WrapImg = styled.div`
  overflow: hidden;
  width: 118px;
  height: 118px;
  margin-right: 20px;
  border-radius: 5px;
`;

export default ReviewCard;

const MOCK_REVIEW_IMAGES = [
  '/images/mypage/img_review.png',
  '/images/mypage/img_review.png',
  '/images/mypage/img_review.png',
];
