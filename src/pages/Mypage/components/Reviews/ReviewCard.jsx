import React from 'react';
import styled from 'styled-components';
import Thumbnail from '../Common/Thumbnail';
import Title from '../Common/Title';
import Grade from '../Common/Grade';
import Img from '../Common/Img';

const ReviewCard = ({ review }) => {
  const { id, review_details, grade, nickname, images } = review;

  return (
    <ReviewContainer>
      <ReviewHeader>
        <UserInfo>
          <Thumbnail
            src="/images/mypage/thumb.png"
            alt="유저 이미지"
            size="54px"
          />
          <Title title={nickname} size="18px" weight="normal" />
        </UserInfo>
        <Grade stars={grade} />
      </ReviewHeader>
      <ReviewBody>
        <ImgList>
          {images.map((img, index) => (
            <WrapImg key={index}>
              <Img src={img || '/images/mypage/img_review.png'} />
            </WrapImg>
          ))}
        </ImgList>
        <Text>{review_details}</Text>
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
  gap: 20px;
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

const Text = styled.p`
  margin-top: 24px;
`;

export default ReviewCard;
