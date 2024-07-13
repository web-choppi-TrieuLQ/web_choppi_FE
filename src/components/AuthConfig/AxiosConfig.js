import axios from "axios";

// Tạo một instance axios tùy chỉnh
// const axiosInstance  = (httpUrl) => {
//     // Tạo một instance axios với cấu hình tùy chỉnh
//     return axios.create({
//         baseURL: httpUrl, // Đặt base URL dựa trên tham số httpUrl
//         headers: {
//             'Content-Type': 'application/json',
//             // Bạn có thể thêm các headers khác nếu cần
//         },
//     });
// };

// Tạo một instance axios tùy chỉnh
const axiosInstance = axios.create({
    // baseURL: 'http://localhost:8080/choppi', // Đặt base URL cho API của bạn
    headers: {
        'Content-Type': 'application/json',
    },
});

// Sử dụng interceptor để thêm token vào header của mỗi request nếu token tồn tại
axiosInstance.interceptors.request.use(
    (config) => {
            // Lấy token từ local storage
            const token = localStorage.getItem('token');
            console.log("token in axios config2: " + token)
            if (token == null) {
                return config
            }
            config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Xuất instance để sử dụng trong toàn bộ dự án
export default axiosInstance;