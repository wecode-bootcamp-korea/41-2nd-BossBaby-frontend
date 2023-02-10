import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoEyeSharp } from 'react-icons/io5';
import { fetchApi } from '../../../../config';
import { useParams } from 'react-router-dom';
import { API } from '../../../../config';

function Views({}) {
  const [views, setViews] = useState();
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    const optionFetch = async () => {
      const data = await fetchApi(`${API.detail}/${productId}`);
      setViews(data.productDetail[0]);
    };
    optionFetch();
  }, []);

  return (
    <Container>
      <div>
        <IoEyeSharp color="#666666" />
      </div>
      {views && <span>{views.views}</span>}
    </Container>
  );
}

export default Views;

const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  div {
    color: #666666;
    margin-right: 5px;
  }
`;
