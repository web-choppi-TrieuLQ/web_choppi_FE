import ProductImageSection from "./ProductImageSection";
import ProductInfoSection from "./ProductInfoSection";
import './ViewDetailProduct.css'
import {useEffect, useState} from "react";
import * as productService from "../../../Service/ProductService";
import {useParams} from "react-router-dom";

export function ViewDetailProduct() {
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
        <div className="demo-view-detail-product my-4">
            {product && <ProductImageSection product={product} />}
            {product && <ProductInfoSection product={product} />}
        </div>
    )
}