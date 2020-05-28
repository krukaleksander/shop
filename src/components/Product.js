import React from 'react';
const Product = (props) => {
    // funckcja zamykająca kontener
    const closeContainerFn = (container) => {
        container.parentNode.removeChild(container);

    }
    // funkcja przenosząca zamówienie do koszyka
    const placeOrderFn = (container, title, price, promotion) => {
        const confirmBtn = document.querySelector('.order-container__confirm');
        const wrapFn = (container, title, price, promotion) => {
            const newOrderObject = {
                title,
                price,
                promotion
            }
            confirmBtn.addEventListener('click', () => {

                props.incrementProductsIcon();
                props.addNewOrder(newOrderObject);
                closeContainerFn(container);
            });
        };
        wrapFn(container, title, price, promotion);


    }

    // funkcja tworząca kontener
    const createOrderContainer = (title, price, promotion) => {
        const container = document.createElement('div');
        container.classList.add('order-container');
        container.innerHTML = `
        <i class="fas fa-window-close order-container__close-icon"></i>
        <h2 class="order-container__title">A więc Twoim marzeniem jest ${title}?</h2>        
        <i class="fas fa-grin-stars order-container__star-icon"></i>               
        <h3 class="order-container__subtitle">Doskonale!</h3> 
        <button class="order-container__confirm">Potwierdzam!</button>      
        `
        document.body.appendChild(container);
        const closeIcon = document.querySelector('.order-container__close-icon');
        closeIcon.addEventListener('click', () => {
            closeContainerFn(container);
        });

        placeOrderFn(container, title, price, promotion);

    }

    // onClick={props.incrementProductsIcon}
    return (
        <div className="product">
            <h2 className="product__title">{props.title}</h2>
            <img src={props.image} alt="" className="product__image" />
            <p className="product__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus sunt nisi eum molestiae repellat corrupti voluptas necessitatibus, dolorem et! Labore modi molestiae recusandae rerum vero, vel est fugit numquam.</p>
            <h3 className={props.promotion ? "product__price product__price--low" : "product__price"}>{props.price + ' zł'}</h3>
            {props.promotion ? <h3 className="product__promotion">{props.lowerPrice + " zł"}</h3> : null}
            <button className="product__buy-btn" onClick={() => createOrderContainer(props.title, props.price, props.promotion)}>Zamów</button>
        </div>
    );
}

export default Product;