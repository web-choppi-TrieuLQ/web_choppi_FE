import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import axiosInstance from "../../components/AuthConfig/AxiosConfig";

export function Payment() {
    const { userId } = useParams();
    const urlSearchParams = new URLSearchParams(window.location.search);
    const vnp_Amount = urlSearchParams.get('vnp_Amount') / 100;
    const vnp_PayDate = urlSearchParams.get('vnp_PayDate');
    const vnp_TransactionNo = urlSearchParams.get('vnp_TransactionNo');
    const vnp_OrderInfo = urlSearchParams.get('vnp_OrderInfo');

    useEffect(() => {
        paymentOk();
    }, []);

    const paymentOk = async () => {
        try {
            const status = urlSearchParams.get('vnp_TransactionStatus');
            const data = await axiosInstance.get(`http://localhost:8080/choppi/payment/${userId}`,
                {
                    params: {
                        vnp_TransactionStatus: status
                    }
                })
            console.log("return: "+ data)
        }catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <div className="body py-5">
                <div className="container">
                    <div className="w-50 m-auto">
                        <h1 className="my-3 text-success text-center">Thanh toán thành công</h1>
                        <h2 className="my-2">Chi tiết đơn hàng</h2>
                        <table className="table table-bordered">
                            <tbody>
                            <tr>
                                <td>Thông tin đơn hàng:</td>
                                <td><span>{vnp_OrderInfo}</span></td>
                            </tr>
                            <tr>
                                <td>Tổng tiền:</td>
                                <td><span>{vnp_Amount}</span></td>
                            </tr>
                            <tr>
                                <td>Ngày thanh toán:</td>
                                <td><span>{vnp_PayDate}</span></td>
                            </tr>
                            <tr>
                                <td>Mã giao dịch:</td>
                                <td><span>{vnp_TransactionNo}</span></td>
                            </tr>
                            </tbody>
                        </table>
                        <Link to="/" className="btn btn-primary">Về trang chủ</Link>
                    </div>
                </div>
            </div>
        </>
    )
}