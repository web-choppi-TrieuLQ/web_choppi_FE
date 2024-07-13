import axiosInstance from "../components/AuthConfig/AxiosConfig";

const url = `http://localhost:8080/choppi/payment`

export const create = async (paymentDTO) => {
    try {
        const response = await axiosInstance.post(url, paymentDTO);
        return response.data;
    } catch (error) {
        console.error("Error while creating category:", error);
        throw error;
    }
};