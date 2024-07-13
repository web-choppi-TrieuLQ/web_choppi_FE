import {useContext, useEffect, useState} from "react";
import * as productService from '../../../Service/ProductService'

export function ProductList() {
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
            <div className="container">
                <h1>List Product</h1>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        products?.map((product) => (
                            <tr key={product.productId}>
                                <td>{product.productId}</td>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.category.categoryName}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

        </>
    )
}