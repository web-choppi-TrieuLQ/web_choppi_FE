import React from 'react';
import './ProductImageSection.css';
import {MDBIcon} from "mdb-react-ui-kit";

const ProductImageSection = ({product}) => {
    return (
        <section className="product-image-section">
            <h2 style={{display: 'none'}}>Product Image Section</h2>
            <div className="flex-column">
                <div className="main-image-container">
                    <img
                        src={product.image}
                        alt="Product image"
                        className="main-product-image"
                    />
                </div>
                <div className="thumbnail-container">
                    <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lscndw3ovxqx90_tn"
                        alt="Thumbnail 1"
                        className="thumbnail-image"
                    />
                    <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llxe6fzh4uzj8b_tn"
                        alt="Thumbnail 2"
                        className="thumbnail-image"
                    />
                    <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llxe6fzh69jzfc_tn"
                        alt="Thumbnail 3"
                        className="thumbnail-image"
                    />
                    <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llxe6fzh7o4f04_tn"
                        alt="Thumbnail 4"
                        className="thumbnail-image"
                    />
                    <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llxe6fzh92ovfd_tn"
                        alt="Thumbnail 5"
                        className="thumbnail-image"
                    />
                </div>
                <div className="share-buttons">
                    <a href="">
                        <MDBIcon fab icon='facebook-f'/>
                    </a>
                    <a href="">
                        <MDBIcon fab icon='twitter'/>
                    </a>
                    <a href="">
                        <MDBIcon fab icon='pinterest'/>
                    </a>
                    <a href="">
                        <MDBIcon fab icon='youtube'/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductImageSection;
