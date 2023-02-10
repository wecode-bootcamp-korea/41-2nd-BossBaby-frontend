import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API, fetchApi } from '../../config';
import { DESC_TXT, INPUT_DATA } from './SellData';
import styled from 'styled-components';
import SellSubmit from './component/SellSubmit';

const ProductSell = () => {
  const [photo, setPhoto] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [sellList, setSellList] = useState({
    title: '',
    subCategoryId: 0,
    region: '',
    conditionId: 1,
    exchangeable: 1,
    price: 0,
    description: '',
  });

  const isLogin = !!localStorage.getItem('token');

  useEffect(() => {
    if (!isLogin) {
      alert('로그인이 필요합니다!');
      navigate('/');
    }
  }, []);

  const navigate = useNavigate();
  const imgPreview = useRef();
  const uploadId = useRef(0);

  const handleSellList = e => {
    const { name, value } = e.target;
    const isNumberValue =
      name === 'price' ||
      name === 'exchangeable' ||
      name === 'conditionId' ||
      name === 'subCategoryId';

    setSellList(prev => ({
      ...prev,
      [name]: isNumberValue ? parseInt(value) : value,
    }));
  };

  const uploadPhoto = e => {
    if (!imgPreview.current.files[0]) return null;
    setPhoto(prev => [
      ...prev,
      {
        id: uploadId.current++,
        value: URL.createObjectURL(imgPreview.current.files[0]),
      },
    ]);
    setImgList(prev => [...prev, e.target.files[0]]);
  };

  const removePhoto = (e, targetId) => {
    e.preventDefault();
    const filteredPhoto = photo.filter(({ id }) => targetId !== id);
    const filteredImgList = imgList.filter((_, i) => targetId !== i);

    setPhoto(filteredPhoto);
    setImgList(filteredImgList);
  };

  const submit = e => {
    e.preventDefault();

    let formData = new FormData();
    const newArr = Object.keys(sellList);

    imgList.forEach(file => formData.append('images', file));
    newArr.forEach(item =>
      formData.append(item, JSON.stringify(sellList[item]))
    );

    fetch(`${API.products}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === '판매상품_등록완료') {
          alert('상품이 등록되었습니다!');
          navigate('/');
        } else if (result.message) {
          alert(result.message);
        }
      })
      .catch(error => console.error(error));
    // fetchData(formData);
  };

  // const fetchData = async formData => {
  //   const data = await fetchApi(`${API.products}`, 'POST', formData, true);
  //   if (data.message === '판매상품_등록완료') {
  //     alert('상품이 등록되었습니다!');
  //     navigate('/productdetail');
  //   } else if (data.message) {
  //     alert(data.message);
  //   }
  // };

  return (
    <Container>
      <Title>기본정보</Title>
      <Line />
      <SubTitle>상품이미지 *</SubTitle>
      <ImgUl>
        <ImgLi>
          <ImgLabel htmlFor="imgupload">
            <Add>+</Add>
          </ImgLabel>
          <ImgInput
            type="file"
            id="imgupload"
            multiple
            ref={imgPreview}
            onChange={uploadPhoto}
            accept="image/*"
            name="images"
          />
        </ImgLi>
        {photo.map(({ id, value }, idx) => {
          return (
            <ImgLi key={idx}>
              <ImgPost src={value} alt="" />
              <DeleteButton onClick={e => removePhoto(e, id)}>x</DeleteButton>
            </ImgLi>
          );
        })}
      </ImgUl>
      <DescDiv>
        {DESC_TXT.map(props => {
          return <DescText key={props.id}>{props.text}</DescText>;
        })}
      </DescDiv>
      {INPUT_DATA.map(list => {
        return (
          <SellSubmit
            list={list}
            key={list.id}
            handleSellList={handleSellList}
            sellList={sellList}
          />
        );
      })}
      <ButtonDiv>
        <PostButton onClick={submit}>등록하기</PostButton>
      </ButtonDiv>
    </Container>
  );
};

export default ProductSell;

const Container = styled.form`
  width: 800px;
  margin: 70px auto;
`;

const Title = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: ${props => props.theme.darkGrey};
`;

const Line = styled.hr`
  width: 100%;
  margin-top: 30px;
`;

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 50px 0 15px;
  color: ${props => props.theme.darkGrey};
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
`;

const PostButton = styled.button`
  background-color: ${props => props.theme.beige};
  border: 0;
  border-radius: 5px;
  padding: 10px 35px;
  color: white;
  margin-top: 100px;
  font-size: 18px;
  font-weight: 600;
`;

const ImgUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  margin-bottom: 20px;
`;

const ImgLi = styled.li`
  margin: 0 20px 0 0;
  position: relative;
`;

const ImgLabel = styled.label`
  width: 230px;
  height: 230px;
  border: 1px solid #e6e5ef;
  border-radius: 5px;
  background-color: #fafafd;
  color: #e6e5ef;
  margin-bottom: 20px;
  cursor: pointer;
  display: block;
`;

const Add = styled.div`
  font-size: 40px;
  padding-left: 45%;
  padding-top: 40%;
`;

const ImgInput = styled.input`
  display: none;
`;

const ImgPost = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 5px;
  object-fit: cover;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 20px;
  border: none;
  background: none;
  cursor: pointer;
`;

const DescDiv = styled.div`
  margin-top: 5px;
`;

const DescText = styled.p`
  color: #4aa4ff;
  margin: 5px 0;
  font-weight: ${props => (props.id === 1 ? 600 : '')}; // 질문 1
`;
