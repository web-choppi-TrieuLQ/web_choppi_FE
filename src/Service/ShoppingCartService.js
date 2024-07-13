import axiosInstance from "../components/AuthConfig/AxiosConfig";

const url = 'http://localhost:8080/choppi/cart';

export const getCartItems = async () => {
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        console.error("Error while fetching cart items:", error);
        throw error;
    }
};

export const addToCart = async (item) => {
    try {
        const response = await axiosInstance.post(url, item);
        return response.data;
    } catch (error) {
        console.error("Error while adding item to cart:", error);
        throw error;
    }
};

export const updateCartItem = async (item, id) => {
    try {
        const response = await axiosInstance.put(`${url}/${id}`, item);
        return response.data;
    } catch (error) {
        console.error(`Error while updating cart item with id ${id}:`, error);
        throw error;
    }
};

export const removeCartItem = async (id) => {
    try {
        await axiosInstance.delete(`${url}/${id}`);
        return true;
    } catch (error) {
        console.error(`Error while removing cart item with id ${id}:`, error);
        return false;
    }
};

export const getCartItemById = async (id) => {
    try {
        const response = await axiosInstance.get(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error while fetching cart item with id ${id}:`, error);
        throw error;
    }
};

export const plusQuantity = async (id) => {
    try {
        const res = await axiosInstance.put(`${url}/plus/${id}`)
        return res.data;
    } catch (e) {
        console.log(e)
    }
}

export const minusQuantity = async (id) => {
    try {
        const res = await axiosInstance.put(`${url}/minus/${id}`)
        return res.data;
    } catch (e) {
        console.log(e)
    }
}