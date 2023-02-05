import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import BaBeeTalk from './pages/BaBeeTalk/BaBeeTalk';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import ProductSell from './pages/ProductSell/ProductSell';
import Payment from './pages/Payment/Payment';
import KakaoLogin from './pages/Login/KakaoLogin';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
        <Route path="/mypage" element={<Mypage />}>
          <Route path="reviews" element={<Mypage />} />
          <Route path="likes" element={<Mypage />} />
          <Route path="selling" element={<Mypage />} />
          <Route path="orders" element={<Mypage />} />
        </Route>
        <Route path="/babeeTalk" element={<BaBeeTalk />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/productlist" element={<ProductList />}>
          <Route path="search" element={<ProductList />} />
        </Route>
        <Route path="/productsell" element={<ProductSell />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
