import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
// import ProductView from "./ProductView";
// import Databinding from "./Databinding";
// import DiscountOffer from "./DiscountOffer";
// import Search from "./Search";

import { lazy, Suspense } from "react";

function Layout(){

  const Databinding = lazy(()=> import('./Databinding'));
  const DiscountOffer = lazy(()=> import('./DiscountOffer'));
  const Search = lazy(()=> import('./Search'));
  const ProductView = lazy(()=> import('./ProductView'));


    return (<>
    <BrowserRouter>
        <Navbar/>
        <Suspense fallback={<div>Loading......</div>}>
        <Routes>
          <Route path="/databinding" element={<Databinding/>}/>
          <Route path="/offer" element={<DiscountOffer/>}/>
          <Route path="/products" element={<Search/>}/>
          <Route path="/product-view/:id" element={<ProductView/>}/>
          <Route path="*" element={<Databinding/>}/>
        </Routes>
        </Suspense>
    </BrowserRouter>
    </>)
}

export default Layout;