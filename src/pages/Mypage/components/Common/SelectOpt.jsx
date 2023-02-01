import React, { useState } from 'react';
import styled from 'styled-components';
import { SELECT_OPT_LIST } from '../../uidata';

const SelectOpt = () => {
  const [value, setValue] = useState('selling');

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <SelectOption onChange={handleChange}>
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
  bottom: 2px;
  padding: 2px;
  font-size: 12px;
  border: 1px solid #a9a9a9;
  border-radius: 4px;
`;

const Opt = styled.option``;

export default SelectOpt;
