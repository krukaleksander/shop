import React from 'react';
import Product from './Product';
import weekProductImg from '../img/spadochron.jpg';
const Home = (props) => {
    return (
        <div className="home">
            <h1 className="home__heading">Oferta tygodnia</h1>
            <Product addNewOrder={props.addNewOrder} title="Skok na spadochronie" promotion={true} lowerPrice={400} price={650} image={weekProductImg} incrementProductsIcon={props.incrementProductsIcon}></Product>

        </div>
    )
}

export default Home;