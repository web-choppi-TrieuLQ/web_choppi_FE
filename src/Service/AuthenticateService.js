import axios from "axios";
import axiosInstance from "../components/AuthConfig/AxiosConfig";

const url = `http://localhost:8080/choppi/auth`

export const logout = async (token) => {
    try {
        await axiosInstance.post(`${url}/logout`, token)
    } catch (e) {
        console.log(e)
    }
}