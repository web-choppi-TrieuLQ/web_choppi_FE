import './App.css';
import {ToastContainer} from "react-toastify";
import {Route, Routes, useNavigate} from "react-router-dom";
import {HomePage} from "./components/HomePage/HomePage";
import {ProductList} from "./components/Admin/Product/ProductList";
import {LatestProduct} from "./components/HomePage/LatestProduct";
import {CreateProduct} from "./components/Admin/Product/CreateProduct";
import {Header} from "./components/HomePage/Header";
import {Footer} from "./components/HomePage/Footer";
import {WhyUs} from "./components/HomePage/WhyUs";
import {Testimonial} from "./components/HomePage/Testimonial";
import {ContactUs} from "./components/HomePage/ContactUs";
import {Login} from "./components/System/Login";
import {Register} from "./components/System/Register";
import './components/AuthConfig/AxiosConfig'
import React, {useEffect, useState} from "react";
import Cart from "./components/Customer/Cart/Cart";
import {Payment} from "./components/Payment/Payment";
import {ProductListCustomer} from "./components/Customer/Product/ProductListCustomer";
import {ViewDetailProduct} from "./components/Customer/Product/ViewDetailProduct";
import {jwtDecode} from "jwt-decode";
import Sidebar from "./components/Admin/HomePage/Sidebar";
import Dashboard from "./components/Admin/HomePage/Dashboard";
import * as authenticateService from "./Service/AuthenticateService";


function App() {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        // Lấy thông tin từ localStorage khi component được load
        if (localStorage.getItem('token')) {
            const decodedToken = jwtDecode(localStorage.getItem('token'));
            setUserRole(decodedToken.scope);
        }
    }, []);

    const handleLogout = async () => {
        try {
            const formData = new FormData();
            formData.append('token', localStorage.getItem("token"));
            await authenticateService.logout(formData)

            // Xóa token khỏi localStorage
            localStorage.removeItem("token");
            setUserRole('');
            navigate("/")
        } catch (e) {
            console.log(e)
        }
        alert("logout successfully")
    };


    return (
        <>
            {
                userRole === 'ADMIN' ?
                    (
                        <div>
                            <Sidebar onLogout={handleLogout}/>/>
                            <div className="admin-main-content">
                                <Routes>
                                    {/*admin*/}
                                    <Route path="/admin/home" element={<Dashboard/>}></Route>
                                    <Route path="/admin/product/list" element={<ProductList/>}></Route>
                                    <Route path="/admin/product/create" element={<CreateProduct/>}></Route>
                                </Routes>
                            </div>
                        </div>

                    ) :
                    (
                        <div>
                            <Header onLogout={handleLogout}/>
                            <Routes>
                                {/*guest*/}
                                <Route path="/" element={<HomePage/>}></Route>
                                <Route path="/home/latestProduct" element={<LatestProduct/>}></Route>
                                <Route path="/home/whyUs" element={<WhyUs/>}></Route>
                                <Route path="/home/testimonial" element={<Testimonial/>}></Route>
                                <Route path="/home/contactUs" element={<ContactUs/>}></Route>
                                <Route path="/login" element={<Login setUserRole={setUserRole}/>}></Route>
                                <Route path="/register" element={<Register/>}></Route>




                                {/*Customer    */}
                                <Route path="/cart" element={<Cart/>}></Route>
                                <Route path="/payment/:userId" element={<Payment/>}></Route>
                                <Route path="/customer/product/list" element={<ProductListCustomer/>}></Route>
                                {/*<Route path="/customer/product/details/:productId" element={<ViewDetailProductDemo/>}></Route>*/}
                                <Route path="/customer/product/details/:productId" element={<ViewDetailProduct/>}></Route>

                            </Routes>
                            <Footer/>
                        </div>

                    )
            }
            <ToastContainer/>
        </>
    );
}

export default App;
