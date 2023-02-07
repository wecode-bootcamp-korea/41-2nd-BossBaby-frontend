import ReviewList from './components/Reviews/ReviewList';
import List from '../../components/CardList/List';

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
  like: <List column={3} />,
  sell: <List column={3} selectOpt={true} />,
  buy: <List column={3} />,
  reviews: <ReviewList />,
};
