import React from 'react';
import styled from 'styled-components';

const Category = ({ sellList, handleSellList }) => {
  return (
    <>
      <SelectOpt
        name="subCategoryId"
        value={sellList.subCategoryId}
        onChange={handleSellList}
      >
        {CATEGORY_LIST.map(({ id, title }) => {
          return (
            <Opt key={id} value={id}>
              {title}
            </Opt>
          );
        })}
      </SelectOpt>
      <SelectResult>
        선택한 카테고리 : {CATEGORY_TITLE[sellList.subCategoryId]}
      </SelectResult>
    </>
  );
};
export default Category;

const SelectOpt = styled.select`
  width: 50%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.whiteGreyD9};
`;

const Opt = styled.option`
  padding-left: 10px;
  color: ${props => props.theme.whiteGreyD9};
`;

const SelectResult = styled.p`
  font-size: 15px;
  margin-top: 20px;
  color: ${props => props.theme.darkbeige};
`;

export const CATEGORY_LIST = [
  { id: 0, value: 'subCategoryId', title: '카테고리를 선택해주세요' },
  { id: 1, value: 'INNER', title: '내의/속옷' },
  { id: 2, value: 'TOP_BOTTOM', title: '상의/하의' },
  { id: 3, value: 'ONE_PIECE', title: '원피스' },
  { id: 4, value: 'SHOES', title: '신발' },
  { id: 5, value: 'ACCESSORY', title: '악세사리' },
  { id: 6, value: 'BEDDING', title: '이불/침구' },
  { id: 7, value: 'TOY', title: '인형/모빌' },
];

const CATEGORY_TITLE = {
  0: '',
  1: '내의/속옷',
  2: '상의/하의',
  3: '원피스',
  4: '신발',
  5: '악세사리',
  6: '이불/침구',
  7: '인형/모빌',
};
