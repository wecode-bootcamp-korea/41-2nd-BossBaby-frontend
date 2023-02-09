import React from 'react';
import styled from 'styled-components';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    prevArrow: (
      <ImageLeftButton>
        <HiOutlineChevronLeft size="30" color="black" />
      </ImageLeftButton>
    ),
    nextArrow: (
      <ImageRightButton>
        <HiOutlineChevronRight size="30" color="black" />
      </ImageRightButton>
    ),
  };
  return (
    <ProductImageWrapper>
      <StyledSlider {...settings}>
        {images.map((item, index) => {
          return (
            <ImageDiv key={index}>
              <ProductImages src={`${item}`} alt="thumb" />
            </ImageDiv>
          );
        })}
      </StyledSlider>
    </ProductImageWrapper>
  );
};
export default Carousel;
const ProductImageWrapper = styled.div`
  width: 430px;
  height: 430px;
  margin-right: 30px;
`;
const StyledSlider = styled(Slider)`
  position: relative;
  height: 100%;
  width: 100%;
  .slick-prev::before,
  .slick-next::before {
    display: none;
    opacity: 0;
  }
  .slick-slide div {
    outline: none;
  }
`;
const ImageDiv = styled.div`
  position: relative;
`;

const ProductImages = styled.img`
  width: 100%;
  height: 430px;
  object-fit: cover;
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
  z-index: 10;
`;
const ImageLeftButton = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
`;
