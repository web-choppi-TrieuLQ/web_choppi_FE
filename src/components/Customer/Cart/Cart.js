import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import * as userService from '../../../Service/UserService'
import {jwtDecode} from 'jwt-decode';
import * as cartService from '../../../Service/ShoppingCartService'
import * as paymentService from '../../../Service/PaymentService'

// CartItem là thành phần đại diện cho mỗi sản phẩm trong giỏ hàng
const CartItem = ({ item, onIncreaseQuantity, onDecreaseQuantity, onRemove }) => {
    console.log('day la item shoppingcart:  ' + item)

    return (
        <Card style={{ marginBottom: '10px' }}>
            <Card.Body>
                <Row>
                    <Col md={4}>
                        <img src={item.product.image} alt={item.product.productName} style={{ width: '100%' }} />
                    </Col>
                    <Col md={8}>
                        <h5>{item.product.productName}</h5>
                        <p>Giá: {item.product.price.toLocaleString()} VND</p>
                        <p>Số lượng: </p>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary fs-5"
                                    onClick={() => onDecreaseQuantity(item.shoppingCartId)}
                                    disabled={item.quantity === 1} // Giảm số lượng nhưng không thể giảm xuống dưới 1
                            > - </button>
                            <input type="text" className="btn btn-outline-primary fs-5" value={item.quantity}/>
                            <button type="button" className="btn btn-outline-primary fs-5" onClick={() => onIncreaseQuantity(item.shoppingCartId)}> + </button>
                        </div>
                        <br/> <br/>
                        <Button variant="danger" onClick={() => onRemove(item.shoppingCartId)}>
                            Xóa
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

const demoCart = [
    {
        shoppingCartId: "",
        quantity: "",
        product: {
            productId: "",
            productName: "",
            price: "",
            image: "",
        }
    }
]
// Cart là thành phần chính quản lý giỏ hàng
const Cart = () => {
    const token = localStorage.getItem('token');
    // Giải mã token để lấy thông tin người dùng`
    const decodedToken = jwtDecode(token);

    const [cartItems, setCartItems] = useState(demoCart);

    useEffect(() => {
        getAllShoppingCartOfUser();
    }, []);

    const getAllShoppingCartOfUser = async () => {
        let data = await userService.findUserById(decodedToken.userId)
        let shoppingCarts = data.result.shoppingCarts;
        console.log(shoppingCarts)
        setCartItems(shoppingCarts)
    }

    const handleRemoveItem = async (id) => {
        if (await cartService.removeCartItem(id)) {
            getAllShoppingCartOfUser();
        }
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
    );

    const handleIncreaseQuantity = async (shoppingCartId) => {
        try {
            await cartService.plusQuantity(shoppingCartId)
            getAllShoppingCartOfUser();
        } catch (e) {
            console.log(e)
        }
    }
    const handleDecreaseQuantity = async (shoppingCartId) => {
        try {
            await cartService.minusQuantity(shoppingCartId)
            getAllShoppingCartOfUser();
        } catch (e) {
            console.log(e)
        }
    }

    const submitPayment = async () => {
        console.log("da vao ham submit payment")
        console.log('total = ' + totalPrice + ', id = ' + decodedToken.userId);

        const formData = new FormData();
        formData.append('totalPayment', totalPrice);
        formData.append('idAccount', decodedToken.userId);


        try {
            const createPayment = await paymentService.create(formData);

            window.location.href = createPayment.result;
            return;
        } catch (e) {
            console.log(e);
        }

        return undefined;
    }

    return (
        <Container>
            <h2>Giỏ hàng của bạn</h2>
            <Row>
                <Col md={8}>
                    {cartItems?.map((item) => (
                        <CartItem
                            key={item.shoppingCartId}
                            item={item}
                            onIncreaseQuantity={handleIncreaseQuantity}
                            onDecreaseQuantity={handleDecreaseQuantity}
                            onRemove={handleRemoveItem}
                        />
                    ))}
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <h4>Tổng cộng</h4>
                            <p>Giá trị giỏ hàng: {totalPrice.toLocaleString()} VND</p>
                            <Button variant="primary" block onClick={() => submitPayment()}>
                                Thanh toán
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
