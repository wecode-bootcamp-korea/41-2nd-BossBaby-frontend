import React from 'react';
import styled from 'styled-components';
import Room from './Common/Room';

const Rooms = () => {
  return (
    <RoomListContainer>
      <RoomListHeader>
        <Button>전체대화</Button>
        <Button fontSize="18px">설정</Button>
      </RoomListHeader>
      <RoomListContent>
        <Room
          src="https://via.placeholder.com/150"
          nickname="김상헌상헌"
          desc="안녕하세요 저는 김상헌상헌입니다."
        />
        <Room
          src="https://via.placeholder.com/150"
          nickname="김지환지환"
          desc="안녕하세요 저는 김지환지환입니다."
        />
      </RoomListContent>
    </RoomListContainer>
  );
};

const RoomListContainer = styled.div`
  width: 47%;
  height: 100%;
  padding: 30px 0;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

const RoomListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 30px 18px;
  &::after {
    position: absolute;
    left: 30px;
    bottom: 0;
    width: calc(100% - 60px);
    height: 1px;
    background-color: rgba(217, 217, 217, 0.3);
    content: '';
  }
`;

const Button = styled.button`
  position: relative;
  font-size: ${props => props.fontSize || '20px'};
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const RoomListContent = styled.div`
  overflow: hidden;
  overflow-y: auto;
  height: calc(100% - 60px);
  padding: 30px 0;
`;

export default Rooms;
