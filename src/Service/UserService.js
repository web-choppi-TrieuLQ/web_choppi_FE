import axiosInstance from "../components/AuthConfig/AxiosConfig";

const url = `http://localhost:8080/choppi/api/v1/user`

export const findAll = async () => {
    try {
        const data = await axiosInstance.get(url);
        return data.data;
    } catch (e) {
        console.log(e)
    }
}

export const createUser = async (user) => {
    try {
        const response = await axiosInstance.post(url, user);
        return true;
    } catch (error) {
        console.error("Error while creating user:", error);
        throw error;
    }
};

export const updateUser = async (user, id) => {
    try {
        const response = await axiosInstance.put(`${url}/${id}`, user);
        return true;
    } catch (error) {
        console.error(`Error while updating user with id ${id}:`, error);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        await axiosInstance.delete(`${url}/${id}`);
    } catch (error) {
        console.error(`Error while deleting user with id ${id}:`, error);
        throw error;
    }
};

export const findUserById = async (id) => {
    try {
        const response = await axiosInstance.get(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error while fetching user with id ${id}:`, error);
        throw error;
    }
};