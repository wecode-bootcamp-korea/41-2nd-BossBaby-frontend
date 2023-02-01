import ReviewList from './components/Reviews/ReviewList';
import ProductList from './components/Products/ProductList';

export const TAB_LIST = [
  { id: 0, url: '/mypage/like', title: '찜 목록' },
  { id: 1, url: '/mypage/sell', title: '판매 목록' },
  { id: 2, url: '/mypage/buy', title: '구매 내역' },
  { id: 3, url: '/mypage/reviews', title: '거래 후기' },
];

export const TAB_MAPPING_TITLE = {
  like: '찜 목록',
  sell: '판매 목록',
  buy: '구매 내역',
  reviews: '거래 후기',
};

export const TAB_MAPPING_OBJ = {
  like: <ProductList />,
  sell: <ProductList hasSelect={true} />,
  buy: <ProductList />,
  reviews: <ReviewList />,
};

export const SELECT_OPT_LIST = [
  { id: 0, value: 'selling', title: '판매중' },
  { id: 1, value: 'pending', title: '예약중' },
  { id: 2, value: 'soldout', title: '판매 완료' },
];
