import { BrowserRouter, Route, Routes } from "react-router-dom";
import Databinding from "./Databinding";
import DiscountOffer from "./DiscountOffer";
import Search from "./Search";
import Navbar from "./Navbar";

function Layout(){

    return (<>
    <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/databinding" element={<Databinding/>}/>
          <Route path="/offer" element={<DiscountOffer/>}/>
          <Route path="/products" element={<Search/>}/>
          <Route path="*" element={<Databinding/>}/>
        </Routes>
    </BrowserRouter>
    </>)
}

export default Layout;