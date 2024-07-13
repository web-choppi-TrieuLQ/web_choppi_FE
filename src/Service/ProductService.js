import axiosInstance from "../components/AuthConfig/AxiosConfig";

const url = `http://localhost:8080/choppi/api/v1/product`


function demoTryCatch() {
    try {

    } catch (e) {
        console.log(e)
    }
}
// export const findAll = async (token) => {
//     try {
//         console.log("Token in productService: " + token)
//         const data = await axios.get(url, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         return data.data;
//     } catch (e) {
//         console.log(e)
//     }
// }

export const findAll = async () => {
    try {
        const data = await axiosInstance.get(url);
        return data.data;
    } catch (e) {
        console.log(e)
    }
}

export const create = async (product, file) => {
    try {
        // Tạo một đối tượng FormData để chứa dữ liệu sản phẩm và file
        const formData = new FormData();
        formData.append('product', JSON.stringify(product)); // Chuyển đổi dữ liệu sản phẩm thành chuỗi JSON và đưa vào FormData
        formData.append('file', file); // Đưa file vào FormData

        // Gửi request sử dụng FormData
        await axiosInstance.post(url, formData);
    } catch (e) {
        console.log(e)
    }
}

export const createProduct = async (product, file) => {
    try {
        await axiosInstance.post(url, product, file);
    } catch (e) {
        console.log(e)
    }
}

export const update = async (product, id) => {
    try {
        await axiosInstance.put(url + `/${id}`, product);
    } catch (e) {
        console.log(e)
    }
}

export const remove = async (id) => {
    try {
        await axiosInstance.delete(url + `/${id}`);
    } catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        const data = await axiosInstance.get(url + `/${id}`)
        return data.data;
    } catch (e) {
        console.log(e)
    }
}
