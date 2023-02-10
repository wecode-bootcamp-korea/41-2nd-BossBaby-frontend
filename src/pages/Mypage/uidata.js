import ReviewList from './components/Reviews/ReviewList';
import List from '../../components/CardList/List';

export const TAB_LIST = [
  { id: 0, pathname: '/mypage/likes', title: '찜 목록' },
  { id: 1, pathname: '/mypage/selling', title: '판매 목록' },
  { id: 2, pathname: '/mypage/orders', title: '구매 내역' },
  { id: 3, pathname: '/mypage/reviews', title: '거래 후기' },
];

export const TAB_MAPPING_TITLE = {
  likes: '찜 목록',
  selling: '판매 목록',
  orders: '구매 내역',
  reviews: '거래 후기',
};

export const TAB_MAPPING_OBJ = {
  mypage: () => console.log('mypage!'),
  likes: url => <List column={3} url={url} />,
  selling: url => <List column={3} url={url} selectOpt={true} />,
  orders: url => <List column={3} url={url} />,
  reviews: url => <ReviewList url={url} />,
};
