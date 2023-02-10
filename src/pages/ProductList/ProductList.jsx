import React, { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import styled from 'styled-components';
import rArrow from '../../assets/images/right-arrow.png';
import lArrow from '../../assets/images/left-arrow.png';
import List from '../../components/CardList/List';
import { API } from '../../config';

const ProductList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalNum, setTotalNum] = useState(0);
  const queryString = searchParams.toString();
  const hasPathNameSearch = location.pathname.includes('search');
  const searchKeyword = searchParams.get('search');
  const searchPathName = hasPathNameSearch ? '/search' : '';

  useEffect(() => {
    // totalNum 받는 fetch
    queryString === '' &&
      navigate('/productlist?subCategory=INNER&sort=RECENT&offset=0&limit=12');

    fetch(`${API.products}/count?subCategory=${subCategory}`)
      .then(result => result.json())
      .then(data => {
        setTotalNum(Number(data[0].total));
      });
  }, [queryString]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, queryString]);

  // 페이지네이션
  const page = searchParams.get('page');
  const itemNumber = 12;
  const lastPageNumber = Math.ceil(totalNum / itemNumber);
  const startPageNumber = parseInt(page / 10);
  const pageArr = new Array(lastPageNumber).fill(
    5 * Number(startPageNumber) + 1
  );

  const offset = searchParams.get('offset') || '0';
  const limit = searchParams.get('limit') || '12';
  const subCategory = searchParams.get('subCategory') || 'INNER';
  const sort = searchParams.get('sort') || 'RECENT';

  const movePage = pageNumber => {
    searchParams.set('offset', (pageNumber - 1) * 10);
    setSearchParams(searchParams);
  };

  return (
    <ProductListWrapper>
      <CateBox>
        <SearchBox>
          {hasPathNameSearch ? (
            <SearchCateTitle>{`${searchKeyword} 검색결과 입니다.`}</SearchCateTitle>
          ) : (
            <CateTitle>{MAPPING_TITLE[subCategory]}</CateTitle>
          )}
          <CateSortBox>
            {CATEGORY_SORT.map(item => (
              <CateSort
                key={item.id}
                to={`?search=${searchKeyword}&subCategory=${subCategory}&offset=${offset}&limit=${limit}&sort=${item.sort}`}
              >
                {item.title}
              </CateSort>
            ))}
          </CateSortBox>
        </SearchBox>
      </CateBox>
      <ProductBox>
        <List
          column={4}
          url={`${API.products}${searchPathName}?${queryString}`}
        />
      </ProductBox>
      <PageNationBox>
        <PageNationList>
          <PageLNarrow to="#none" />
          {pageArr.map((num, i) => {
            const offsetNum = i * 12;
            const limitNum = (i + 1) * 12;
            return (
              <PageNationLink
                to={`?search=${searchKeyword}&subCategory=${subCategory}&offset=${offsetNum}&limit=${limitNum}&sort=${sort}`}
                key={i}
                onChange={movePage}
              >
                {num + i}
              </PageNationLink>
            );
          })}
          <PageRNarrow to="#none" />
        </PageNationList>
      </PageNationBox>
    </ProductListWrapper>
  );
};

const ProductListWrapper = styled.div`
  width: 1020px;
  margin: 0 auto;
  padding: 60px 10px;
`;

const CateBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBox = styled.div`
  width: 1020px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchCateTitle = styled.p`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 18px;
`;

const CateTitle = styled.p`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
`;

const CateSortBox = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-end;
`;

const CateSort = styled(Link)`
  margin: 0px 5px 5px 5px;
  text-decoration: none;
  color: ${props => props.theme.darkGrey};

  &::after {
    content: '|';
    margin-left: 5px;
    color: ${props => props.theme.lightGrey};
  }

  &:last-child {
    margin-right: 5px;
  }

  &:last-child::after {
    content: '';
  }
`;

const ProductBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PageNationBox = styled.div`
  display: flex;
  width: 1020px;
  height: 33px;
  justify-content: center;
  margin-top: 40px;
`;

const PageNationList = styled.div`
  display: flex;
  width: 510px;
  height: 33px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const PageRNarrow = styled(Link)`
  width: 10px;
  height: 10px;
  margin-right: 15px;
  margin-bottom: 4px;
  background: url(${rArrow});
  background-size: cover;
`;

const PageLNarrow = styled(Link)`
  width: 10px;
  height: 10px;
  margin-right: 15px;
  margin-bottom: 4px;
  background: url(${lArrow});
  background-size: cover;
`;

const PageNationLink = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  color: ${props => props.theme.darkGrey};

  &:visited {
    text-decoration: none;
    color: ${props => props.theme.darkGrey};
  }
`;

export default ProductList;

const CATEGORY_SORT = [
  { id: 1, title: '최신순', sort: 'RECENT' },
  { id: 2, title: '인기순', sort: 'FAVORITE' },
  { id: 3, title: '저가순', sort: 'PRICE_ASC' },
  { id: 4, title: '고가순', sort: 'PRICE_DSC' },
];

const MAPPING_TITLE = {
  INNER: '내의/속옷',
  TOP_BOTTOM: '상의/하의',
  ONE_PIECE: '원피스',
  SHOES: '신발',
  ACCESSORY: '악세사리',
  BEDDING: '이불/침구',
  TOY: '인형/모빌',
};
