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
        <BtnImg src="./images/Main/arrow-left.png" alt="left" />
      </PrevBtn>
    ),
    nextArrow: (
      <NextBtn>
        <BtnImg src="./images/Main/arrow-right.png" alt="right" />
      </NextBtn>
    ),
  };

  return (
    <CarouselWrapper>
      <StyledSlider {...settings}>
        {IMAGE_LIST.map(({ id, description }) => {
          return (
            <SliderDiv key={id}>
              <SliderImg src={`../images/Main/banner${id}.jpg`} alt="photo" />
              {description}
            </SliderDiv>
          );
        })}
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

const SliderDiv = styled.div`
  position: relative;
`;

const SliderImg = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
`;

const First = styled.div`
  position: absolute;
  top: 40%;
  left: 35%;
  color: white;
  text-align: center;
  font-family: 'Pretendard Variable';
`;

const FirstTitle = styled.p`
  font-weight: 800;
  font-size: 70px;
  color: white;
`;

const FirstSub = styled.p`
  margin: 10px;
  font-size: 35px;
  color: white;
`;

const Second = styled.div`
  position: absolute;
  top: 40%;
  left: 32%;
  color: white;
  text-align: center;
  font-family: 'Pretendard Variable';
`;

const SecondTitle = styled.p`
  margin: 10px;
  font-size: 45px;
  color: white;
`;

const SecondSub = styled.p`
  font-size: 60px;
  font-weight: 800;
  color: white;
`;

const ThirdTitle = styled.p`
  position: absolute;
  top: 48%;
  left: 30%;
  color: white;
  text-align: center;
  font-size: 45px;
  font-family: 'Pretendard Variable';
`;

const Logo = styled.span`
  font-weight: 700;
  color: white;
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

const BtnImg = styled.img`
  width: 100%;
  height: 100%;
`;

const IMAGE_LIST = [
  {
    id: 1,
    description: (
      <First>
        <FirstTitle>Everyday New</FirstTitle>
        <FirstSub>매일이 새로운 우리 아기 옷</FirstSub>
      </First>
    ),
  },
  {
    id: 2,
    description: (
      <Second>
        <SecondTitle>깨끗하고 새로운 중고제품으로</SecondTitle>
        <SecondSub>BaBee</SecondSub>
      </Second>
    ),
  },
  {
    id: 3,
    description: (
      <ThirdTitle>
        언제나 아기먼저 생각하는 <Logo>BaBee</Logo>
      </ThirdTitle>
    ),
  },
];
