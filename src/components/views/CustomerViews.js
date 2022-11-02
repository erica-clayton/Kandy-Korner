import { Outlet, Route, Routes } from "react-router-dom";
import { ProductList } from "../products/ProductList";

export const CustomerViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
            <h1 className="title--main">Kandy Korner</h1>
            <div>Your one-stop shop for all your Kandy needs </div>
            <Outlet/>
        </>
    }>
            <Route path="products" element={<ProductList/>} />
        
    
            
    
        </Route>
    </Routes>
        );
}