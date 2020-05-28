import React from 'react';

const Cart = (props) => {
    const ordersArr = props.order;
    let ordersSum = 0;
    const listOfOrders = ordersArr.map((order, index) => {
        if (order.promotion) {
            ordersSum = ordersSum + Math.floor(order.price * 0.6154);
        } else {
            ordersSum = ordersSum + order.price;
        }
        return (
            <li className="orders__item" key={index}>
                <span className="orders__name">{order.title}</span>
                <span className="orders__price"> {order.promotion ? Math.floor(order.price * 0.6154) : order.price}zł</span>
            </li>
        )
    });
    const hideShoppingCart = () => {
        const cart = document.querySelector('.orders');
        cart.style.left = '-100%'
    }
    return (
        <div className="orders">
            <div className="closing-arrow" onClick={hideShoppingCart}>
                <i className="fas fa-angle-left closing-arrow__icon"></i>
                <i className="fas fa-angle-left closing-arrow__icon"></i>
                <i className="fas fa-angle-left closing-arrow__icon"></i>
            </div>

            <ul className="orders__list">
                {listOfOrders}
            </ul>
            <div className="orders-sum">
                <span className="orders-sum__title">Suma:</span>
                <span className="orders-sum__ammount">{ordersSum}zł</span>
            </div>
        </div>
    );
}

export default Cart;