import axiosInstance from "../components/AuthConfig/AxiosConfig";

const url = `http://localhost:8080/choppi/api/v1/category`;

export const findAll = async () => {
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        console.error("Error while fetching categories:", error);
        throw error;
    }
};

export const create = async (category) => {
    try {
        const response = await axiosInstance.post(url, category);
        return true;
    } catch (error) {
        console.error("Error while creating category:", error);
        throw error;
    }
};

export const update = async (category, id) => {
    try {
        const response = await axiosInstance.put(`${url}/${id}`, category);
        return true;
    } catch (error) {
        console.error(`Error while updating category with id ${id}:`, error);
        throw error;
    }
};

export const remove = async (id) => {
    try {
        await axiosInstance.delete(`${url}/${id}`);
    } catch (error) {
        console.error(`Error while deleting category with id ${id}:`, error);
        throw error;
    }
};

export const findById = async (id) => {
    try {
        const response = await axiosInstance.get(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error while fetching category with id ${id}:`, error);
        throw error;
    }
};
