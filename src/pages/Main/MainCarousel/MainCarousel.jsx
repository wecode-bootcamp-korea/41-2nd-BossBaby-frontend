import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: (
      <PrevBtn>
        <Img src="./images/Main/arrow-left.png" alt="left" />
      </PrevBtn>
    ),
    nextArrow: (
      <NextBtn>
        <Img src="./images/Main/arrow-right.png" alt="right" />
      </NextBtn>
    ),
  };

  return (
    <CarouselWrapper>
      <StyledSlider {...settings}>
        <div>
          <SliderImg src="../images/Main/banner1.png" alt="photo" />
        </div>
        <div>
          <SliderImg src="../images/Main/banner2.png" alt="photo" />
        </div>
        <div>
          <SliderImg src="../images/Main/banner3.png" alt="photo" />
        </div>
      </StyledSlider>
    </CarouselWrapper>
  );
};

export default MainCarousel;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
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

const SliderImg = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
`;

const PrevBtn = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 3%;
  z-index: 10;
`;

const NextBtn = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 3%;
  z-index: 10;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
