import React from 'react';
import Product from './Product';
import weekProductImg from '../img/spadochron.jpg';
const Home = () => {
    return (
        <div className="home">
            <h1 className="home__heading">Oferta tygodnia</h1>
            <Product title="Skok na spadochronie" promotion={true} lowerPrice={400} price={650} image={weekProductImg}></Product>

        </div>
    )
}

export default Home;