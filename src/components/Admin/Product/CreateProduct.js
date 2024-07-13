import {ErrorMessage, Field, Form, Formik} from "formik";
import  React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import * as categoryService from '../../../Service/CategoryService'
import * as productService from '../../../Service/ProductService'

const init = {
    productName: "productName",
    price: "500",
    image: null,
    category: ""
};
export function CreateProduct() {
    const [categories, setCategories] = useState([]);
    const fileInputRef = useRef(null);
    const [selectFile, setSelectFile] = useState(null);

    useEffect(() => {
        getAllCategories()
    }, []);



    const getAllCategories = async () => {
        try {
            let data = await categoryService.findAll();
            setCategories(data);
        } catch (e) {
            console.log(e)
        }
    }
    const createProduct = async (product) => {
        console.log("product before try catch to mapping data");
        console.log(product);

        // Convert category to JSON
        product.category = JSON.parse(product.category);

        try {
            await productService.create(product, selectFile)
            console.log("product after try catch to mapping data");
            console.log(product);
        } catch (e) {
            console.log(e)
        }
    };
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log('Selected file:', selectedFile);
        setSelectFile(selectedFile);
    };
    return (
        <>
            <div className="container">

                <Formik initialValues={init} onSubmit={product => createProduct(product)}>
                    { ({isSubmitting, setFieldValue}) => (
                        <div className="container mt-5 border border-dark border-3 rounded p-4 mb-3">
                            <h1 className="text-center">Create Product</h1>
                            <Form enctype="multipart/form-data">
                                <div className='mb-3'>
                                    <label htmlFor='productName' className='form-label fw-bold'>Product Name</label>
                                    <Field type='text' className='form-control' id='productName' name="productName"/>
                                    <ErrorMessage name="productName" component="span"
                                                  style={{color: "red"}}></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='price' className='form-label fw-bold'>Price</label>
                                    <Field type='number' className='form-control' id='price' name="price"/>
                                    <ErrorMessage name="price" component="span" style={{color: "red"}}></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='image' className='form-label fw-bold'>Product Image</label>

                                    <Field type='file' onChange={handleFileChange}
                                           className='form-control' id='image' name="image"/>
                                    <ErrorMessage name="image" component="span" style={{color: "red"}}></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='category' className='form-label fw-bold'>
                                        Category
                                    </label>
                                    <Field
                                        className='form-select'
                                        id='category'
                                        name='category'
                                        as="select"
                                    >
                                        <option value="" disabled>Select Categories</option>
                                        {categories?.map((category) => (
                                            <option key={category.categoryId} value={JSON.stringify(category)}>
                                                {category.categoryName}
                                            </option>
                                        ))}
                                    </Field>
                                </div>

                                <div className="text-center m-2">
                                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
                                    <button type="reset" className="btn btn-success mx-1">Reset</button>
                                    <Link to="/admin/product/list" className="btn btn-secondary">Back to Product
                                        List</Link>
                                </div>
                            </Form>
                        </div>

                    )

                    }
                </Formik>
            </div>

        </>
    )
}