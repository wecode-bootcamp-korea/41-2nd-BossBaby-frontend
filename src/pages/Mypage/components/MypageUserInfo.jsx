import React from 'react';
import styled from 'styled-components';
import Title from './Common/Title';
import Text from './Common/Text';
import Thumbnail from './Common/Thumbnail';

const MypageUserInfo = () => {
  return (
    <UserInfos>
      <Thumbnail
        src="/images/mypage/thumb.png"
        alt="유저 이미지"
        size="130px"
      />
      <InfoContents>
        <Title title="보스베이비" fontSize="26px" />
        <Text text="안녕하세요 보스 베이비 입니다. 예쁜 아기 1명 키우고 있어요 ~~" />
        <Text text="판매 상품 : 20개" color="#B8A990" />
      </InfoContents>
      <Button>프로필 수정</Button>
    </UserInfos>
  );
};

const UserInfos = styled.div`
  display: flex;
  position: relative;
  margin-top: 86px;
  padding-bottom: 36px;
  border-bottom: 1px solid #d9d9d9;
`;

const InfoContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 4px 13px;
  font-size: 13px;
  color: #999;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;

export default MypageUserInfo;
