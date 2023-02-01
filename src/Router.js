import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Mypage from './pages/Mypage/Mypage';
import BaBeeTalk from './pages/BaBeeTalk/BaBeeTalk';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import ProductSell from './pages/ProductSell/ProductSell';
import Payment from './pages/Payment/Payment';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />}>
          <Route path="like" element={<Mypage />} />
          <Route path="sell" element={<Mypage />} />
          <Route path="buy" element={<Mypage />} />
          <Route path="reviews" element={<Mypage />} />
        </Route>
        <Route path="/babeeTalk" element={<BaBeeTalk />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productsell" element={<ProductSell />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
