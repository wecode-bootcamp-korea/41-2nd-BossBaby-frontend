import React from 'react';
import styled from 'styled-components';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';

const Carousel = ({ images }) => {
  return (
    <ProductImageWrapper>
      <ImageDiv>
        <ProductImages src={images[0]} alt="thumb" />
        <ImageLeftButton>
          <HiOutlineChevronLeft size="30" />
        </ImageLeftButton>
        <ImageRightButton>
          <HiOutlineChevronRight size="30" />
        </ImageRightButton>
      </ImageDiv>
    </ProductImageWrapper>
  );
};
export default Carousel;

const ProductImageWrapper = styled.div`
  width: 430px;
  height: 430px;
  margin-right: 30px;
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const ProductImages = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageRightButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #d9d9d9;
  }
`;

const ImageLeftButton = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #d9d9d9;
  }
`;

const Img = styled.img``;
