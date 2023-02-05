import React from 'react';
import styled from 'styled-components';

const TypeButton = ({ sellList, handleSellList, name, value }) => {
  return (
    <StatusWrapper>
      <StatusDiv>
        <StatusInput
          type="radio"
          name={name}
          value={1}
          checked={sellList[name] === parseInt(value)}
          onChange={handleSellList}
        />
        <Statuslabel>
          {name === 'conditionId' ? '중고상품' : '교환 가능'}
        </Statuslabel>
      </StatusDiv>
      <StatusDiv>
        <StatusInput
          type="radio"
          name={name}
          value={name === 'conditionId' ? 2 : 0}
          checked={sellList[name] !== parseInt(value)}
          onChange={handleSellList}
        />
        <Statuslabel>
          {name === 'conditionId' ? '새상품' : '교환 불가'}
        </Statuslabel>
      </StatusDiv>
    </StatusWrapper>
  );
};

export default TypeButton;

const StatusWrapper = styled.div`
  display: flex;
  height: auto;
  width: 100%;
`;

const StatusDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 25px;
`;

const Statuslabel = styled.label``;

const StatusInput = styled.input.attrs({ type: 'radio' })`
  vertical-align: middle;
  appearance: none;
  border: 1px solid gray;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  margin-right: 10px;
  &:checked {
    border: 0.3em solid #b8a990;
  }
`;
