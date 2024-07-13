import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../components/AuthConfig/AuthContext';

// Custom hook để cấu hình Axios interceptors
const useAxiosInterceptor = () => {
    const { token } = useContext(AuthContext);

    useEffect(() => {
        console.log("token in custom hook:" + token)
        // Khai báo interceptor cho các yêu cầu HTTP
        const requestInterceptor = axios.interceptors.request.use(
            (config) => {
                // Kiểm tra xem token có tồn tại không
                if (token) {
                    // Thêm Bearer token vào tiêu đề Authorization
                    config.headers['Authorization'] = `Bearer ${token}`;
                }

                // Trả về cấu hình đã cập nhật
                return config;
            },
            (error) => {
                // Xử lý lỗi nếu có
                return Promise.reject(error);
            }
        );

        // Dọn dẹp: Loại bỏ interceptor khi component bị hủy
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
        };
    }, [token]); // Chỉ chạy khi token thay đổi
};

export default useAxiosInterceptor;
