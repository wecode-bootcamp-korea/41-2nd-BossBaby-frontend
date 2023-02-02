import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import Category from './Category';
import TypeButton from './TypeButton';

const SellSubmit = ({
  list: { title, type, placeholder, width, name, value },
  handleSellList,
  sellList,
}) => {
  return (
    <div>
      <Title>{title}</Title>
      {(type === 'text' || type === 'number') && (
        <TitleDiv>
          <InputStyle
            placeholder={placeholder}
            width={width}
            name={name}
            onChange={handleSellList}
          />
          {title === '제목' && (
            <TitleCount>{sellList.title.length} / 40</TitleCount>
          )}
          {title === '가격' && <span>원</span>}
          {title === '수량' && <span>개</span>}
        </TitleDiv>
      )}
      {type === 'select' && (
        <Category handleSellList={handleSellList} sellList={sellList} />
      )}
      {type === 'radio' && (
        <TypeButton
          handleSellList={handleSellList}
          sellList={sellList}
          name={name}
          value={value}
        />
      )}
      {title === '상품설명' && (
        <Description handleSellList={handleSellList} sellList={sellList} />
      )}
    </div>
  );
};

export default SellSubmit;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 50px 0 15px;
  color: ${props => props.theme.darkGrey};
`;

const InputStyle = styled.input`
  width: ${props => props.width || '100%'};
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid ${props => props.theme.whiteGreyD9};
  &::placeholder {
    color: ${props => props.theme.whiteGreyD9};
  }
  margin-right: 10px;
`;

const TitleDiv = styled.div`
  position: relative;
`;

const TitleCount = styled.span`
  position: absolute;
  top: 12px;
  right: 20px;
  color: ${props => props.theme.darkGrey};
`;
