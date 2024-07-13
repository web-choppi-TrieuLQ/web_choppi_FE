import React, {useState} from 'react';
import './ProductInfoSection.css';
import  * as cartService from '../../../Service/ShoppingCartService'
import Swal from 'sweetalert2';

const ProductInfoSection = ({product}) => {
    const [quantityProduct, setQuantityProduct] = useState(1);
    const addToCart = async () => {
        let formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('productId', product.productId);
        formData.append('quantity', quantityProduct)
        await  cartService.addToCart(formData);
        Swal.fire({
            title: "Success!",
            text: "You Add To Cart Success, Click to Cart To Buy!",
            icon: "success"
        });
    };

    return (
        <section className="product-info-section">
            <h2 style={{display: 'none'}}>Product Information Section</h2>
            <div className="product-info">
                <div className="product-title">
                    <img
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/40a453875daccf8cc324.svg"
                        alt="mall badge"
                    />
                    <h3>{product.productName}</h3>
                </div>
                <div className="rating-and-sales">
                    <div className="rating">5.0 (5,3k đánh giá)</div>
                    <div className="sales">25,7k đã bán</div>
                </div>
                <div className="price-section">
                    <div className="current-price">₫{product.price}</div>
                    <div className="discounted-price">₫30.090.000 - ₫30.790.000</div>
                    <div className="discount">14% giảm</div>
                </div>
                <div className="shipping-info">
                    <h3>Vận chuyển</h3>
                    <div className="shipping-details">
                        <img
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/3e0adc366a3964f4fb59.svg"
                            alt="Shopee service"
                        />
                        <span>Xử lý đơn hàng bởi Shopee</span>
                        <img
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png"
                            alt="Free shipping"
                        />
                        <span>Miễn phí vận chuyển</span>
                    </div>
                </div>
                <div className="purchase-options">
                    <h3>Phân Loại</h3>
                    <div className="option-buttons">
                        <button className="option-button">Titan - Tự Nhiên</button>
                        <button className="option-button">Titan - Xanh</button>
                        <button className="option-button">Titan - Trắng</button>
                        <button className="option-button">Titan - Đen</button>
                    </div>
                    <h3>Số lượng</h3>
                    <div className="quantity-selector">
                        <button className="decrease-button" disabled={quantityProduct === 1} onClick={() => setQuantityProduct(quantityProduct - 1)}>-</button>
                        <input type="text" value={quantityProduct} className="quantity-input"/>
                        <button className="increase-button" onClick={() => setQuantityProduct(quantityProduct + 1)}>+</button>
                    </div>
                </div>
                <div className="action-buttons">
                    <button className="add-to-cart-button" onClick={() => addToCart()}>Thêm vào giỏ hàng</button>
                    <button className="buy-now-button">Mua ngay</button>
                </div>
                <div className="guarantees">
                    <div className="guarantee">
                        <img
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/2bcf834c40468ebcb90b.svg"
                            alt="15 days free return"
                        />
                        <span>Đổi ý miễn phí 15 ngày</span>
                    </div>
                    <div className="guarantee">
                        <img
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/511aca04cc3ba9234ab0.png"
                            alt="100% genuine products"
                        />
                        <span>Hàng chính hãng 100%</span>
                    </div>
                    <div className="guarantee">
                        <img
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/16ead7e0a68c3cff9f32.png"
                            alt="Free shipping"
                        />
                        <span>Miễn phí vận chuyển</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductInfoSection;
