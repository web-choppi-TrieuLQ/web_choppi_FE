import Sidebar from "./HomePage/Sidebar";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./HomePage/Dashboard";
import {ProductList} from "./Product/ProductList";
import {CreateProduct} from "./Product/CreateProduct";
import React from "react";

export const AdminPage = ({onLogout}) => {
    return (
        <>
            <div>
                <Sidebar onLogout={onLogout}/>/>
                <div className="admin-main-content">
                    <Routes>
                        {/*admin*/}
                        <Route path="/admin/home" element={<Dashboard/>}></Route>
                        <Route path="/admin/product/list" element={<ProductList/>}></Route>
                        <Route path="/admin/product/create" element={<CreateProduct/>}></Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}