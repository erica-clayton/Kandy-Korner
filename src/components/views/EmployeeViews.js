import { Outlet, Route, Routes } from "react-router-dom";
import { LocationList } from "../locations/LocationList";
import { ProductList } from "../products/ProductList";

export const EmployeeViews = () => {
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
            <Route path="locations" element={<LocationList/>} />
        
    
        </Route>
    </Routes>
        );
}