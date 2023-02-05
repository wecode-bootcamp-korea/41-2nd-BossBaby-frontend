import React from 'react';
import styled from 'styled-components';

const SelectOpt = ({ productId, status, setOptValue }) => {
  const handleChange = (e, productId) => {
    setOptValue(e.target.value, productId);
  };

  return (
    <SelectOption onChange={e => handleChange(e, productId)} value={status}>
      {SELECT_OPT_LIST.map(opt => {
        const { id, value, title } = opt;
        return (
          <Opt key={id} value={value}>
            {title}
          </Opt>
        );
      })}
    </SelectOption>
  );
};

const SelectOption = styled.select`
  position: absolute;
  right: 0;
  bottom: 3px;
  padding: 2px;
  font-size: 12px;
  border: 1px solid #a9a9a9;
  border-radius: 4px;
  z-index: 100;
`;

const Opt = styled.option``;

export default SelectOpt;

const SELECT_OPT_LIST = [
  { id: 0, value: 'selling', title: '판매중' },
  { id: 1, value: 'pending', title: '예약중' },
  { id: 2, value: 'soldout', title: '판매 완료' },
];
