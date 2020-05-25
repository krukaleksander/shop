import React from 'react';
const Product = (props) => {
    return (
        <div className="product">
            <h2 className="product__title">{props.title}</h2>
            <img src={props.image} alt="" className="product__image" />
            <p className="product__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus sunt nisi eum molestiae repellat corrupti voluptas necessitatibus, dolorem et! Labore modi molestiae recusandae rerum vero, vel est fugit numquam.</p>
            <h3 className={props.promotion ? "product__price product__price--low" : "product__price"}>{props.price + ' zł'}</h3>
            {props.promotion ? <h3 className="product__promotion">{props.lowerPrice + " zł"}</h3> : null}
            <button className="product__buy-btn">Zamów</button>
        </div>
    );
}

export default Product;