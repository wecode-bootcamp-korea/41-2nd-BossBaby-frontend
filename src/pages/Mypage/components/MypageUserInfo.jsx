import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from './Common/Title';
import Text from './Common/Text';
import Thumbnail from './Common/Thumbnail';
import { API, fetchApi } from '../../../config';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  description: '',
  profile_image: '',
  total_selling: '0',
};

const MypageUserInfo = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(initialState);
  const { name, description, profile_image, total_selling } = userInfo;

  useEffect(() => {
    fetch(`${API.mypage}/user/info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setUserInfo(data.userInfo[0]);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다!');
    navigate('/');
  };

  return (
    <UserInfos>
      <Thumbnail
        src={profile_image || '/images/mypage/thumb.png'}
        alt="유저 이미지"
        size="130px"
      />
      <InfoContents>
        <Title title={name} fontSize="26px" />
        <Text
          text={
            description === null
              ? `안녕하세요 저는 ${name}입니다.`
              : description
          }
        />
        <Text text={`판매 상품 : ${total_selling}개`} color="#B8A990" />
      </InfoContents>
      <ButtonWrap>
        <Button>프로필 수정</Button>
        <Button onClick={handleLogout}>로그아웃</Button>
      </ButtonWrap>
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

const ButtonWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  gap: 4px;
`;

const Button = styled.button`
  padding: 4px 13px;
  font-size: 13px;
  color: #999;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;

export default MypageUserInfo;
