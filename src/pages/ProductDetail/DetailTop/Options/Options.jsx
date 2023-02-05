import React from 'react';
import styled from 'styled-components';
import { ImLocation } from 'react-icons/im';

function Options({ item, condition, exchangable, region, created_at }) {
  const today = new Date();
  const prevDate = new Date(created_at);
  const betweenTime = Math.floor(
    (today.getTime() - prevDate.getTime()) / (1000 * 60)
  );

  const handleDate = () => {
    if (betweenTime < 1) {
      return '방금전';
    } else if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    } else if (betweenTime < 1440) {
      return `${Math.floor(betweenTime / 60)}시간 전`;
    } else if (betweenTime < 1440 * 7) {
      return `${Math.floor(betweenTime / (24 * 60))}일 전`;
    } else if (betweenTime < 1440 * 7 * 4) {
      return `${Math.floor(betweenTime / (24 * 60 * 7))}주 전`;
    } else if (betweenTime < 1440 * 7 * 4 * 30) {
      return `${Math.floor(betweenTime / (24 * 60 * 7 * 4))}개월 전`;
    }
  };

  return (
    <Container>
      <OptionsWrap>
        <span>{item.title}</span>
        {item.title === '상품상태' ? (
          <p>{condition === 'new' ? '새상품' : '중고상품'}</p>
        ) : item.title === '교환여부' ? (
          <p>{exchangable === 0 ? '불가능' : '가능'}</p>
        ) : item.title === '거래지역' ? (
          <p>
            <ImLocation />
            {region.split(' ').slice(0, 2)}
          </p>
        ) : (
          <p>{handleDate()}</p>
        )}
      </OptionsWrap>
    </Container>
  );
}

export default Options;

const Container = styled.div`
  width: 127px;
  height: 100%;
  text-align: center;
  border-right: 1px solid #d9d9d9;
`;

const OptionsWrap = styled.div`
  p {
    color: #666666;
    margin-top: 10px;
  }
`;
