import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as productService from "../../Service/ProductService";


export function LatestProduct() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        try {
            const data = await productService.findAll();
            setProducts(data);
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>

            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Latest Products
                        </h2>
                    </div>


                    <div className="row">

                        {
                            products?.map((product) => (
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="box" key={product.productId}>
                                        <Link to={`/customer/product/details/${product.productId}`}>
                                            <div className="img-box">
                                                <img style={{width: '100%', height: 'auto'}} src={product.image}
                                                     alt="no img"/>
                                            </div>

                                            <div className="detail-box">
                                                <h6>{product.productName}</h6>
                                                <h6>
                                                    Price<span>${product.price}</span>
                                                </h6>
                                            </div>
                                            <div className="new">
                                                <span>New</span>
                                            </div>

                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>


                    <div className="btn-box">
                        <Link to="/customer/product/list">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}