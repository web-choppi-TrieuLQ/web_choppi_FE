import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as productService from "../../../Service/ProductService";
import "./ViewDetailProduct.css"; // Assuming you will style using an external CSS

export function ViewDetailProductDemo() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(productId);
    }, [productId]);

    const getProductById = async (id) => {
        try {
            const data = await productService.findById(id);
            setProduct(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="product-detail-container">
            {product ? (
                <>
                    <div className="product-detail-heading">
                        <h2>{product.productName}</h2>
                        <div className="rating">
                            <span className="stars">★★★★★</span>
                            <span> 5.0 Đánh Giá</span>
                        </div>
                        <div className="sold">
                            <span> Đã Bán</span>
                        </div>
                    </div>
                    <div className="product-detail-main">
                        <div className="product-detail-images">
                            <img src={product.image} alt="Product" className="main-image" />
                            {/*<div className="thumbnail-images">*/}
                            {/*    {product.thumbnails?.map((thumb, index) => (*/}
                            {/*        <img key={index} src={thumb} alt={`Thumbnail ${index}`} />*/}
                            {/*    ))}*/}
                            {/*</div>*/}
                        </div>
                        <div className="product-detail-info">
                            <div className="price">
                                <span className="original-price">{product?.originalPrice}₫</span>
                                <span className="discounted-price">{product?.discountedPrice}₫</span>
                                <span className="discount">{product?.discount}% GIẢM</span>
                            </div>
                            <div className="flash-sale">
                                <span>FLASH SALE</span>
                                <span>BẮT ĐẦU SAU {product?.flashSaleStart}</span>
                            </div>
                            <div className="shipping">
                                <span>Miễn phí vận chuyển</span>
                            </div>
                            <div className="variant-selection">
                                {product.variants?.map((variant, index) => (
                                    <button key={index} className="variant-button">
                                        {variant}
                                    </button>
                                ))}
                            </div>
                            <div className="quantity-selection">
                                <button className="quantity-button">-</button>
                                <input type="text" value="1" readOnly className="quantity-input" />
                                <button className="quantity-button">+</button>
                            </div>
                            <div className="action-buttons">
                                <button className="add-to-cart">Thêm Vào Giỏ Hàng</button>
                                <button className="buy-now">Mua Ngay</button>
                            </div>
                            <div className="additional-info">
                                <span>Đổi ý miễn phí 15 ngày</span>
                                <span>Hàng chính hãng 100%</span>
                                <span>Miễn phí vận chuyển</span>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
