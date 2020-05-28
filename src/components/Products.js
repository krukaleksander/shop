import React from 'react';
import Product from './Product';
import bungeeImg from '../img/bungee.jpg';
import raceImg from '../img/car-race.jpg';
import chockolateImg from '../img/chockolate.jpg';
import obamaImg from '../img/obama.jpg';
import shootingImg from '../img/shooting.jpg';
import spadochronImg from '../img/spadochron.jpg';
import travelImg from '../img/travel.jpg';
import whiskeyImg from '../img/whiskey.jpg';

const Products = (props) => {
    return (
        <div className="products">
            <h1 className="products__title">Oferta</h1>
            <Product image={bungeeImg} price={150} title="Skok Bungee" incrementProductsIcon={props.incrementProductsIcon} addNewOrder={props.addNewOrder} />
            <Product image={raceImg} price={300} title="Wyścig sportowym wozem" incrementProductsIcon={props.incrementProductsIcon} addNewOrder={props.addNewOrder} />
            <Product image={chockolateImg} price={100} title="Kąpiel w czekoladzie" incrementProductsIcon={props.incrementProductsIcon} addNewOrder={props.addNewOrder} />
            <Product image={obamaImg} price={1000} title="Kolacja z Obamą" incrementProductsIcon={props.incrementProductsIcon} addNewOrder={props.addNewOrder} />
            <Product image={shootingImg} price={100} title="Strzelnica" incrementProductsIcon={props.incrementProductsIcon} addNewOrder={props.addNewOrder} />
            <Product image={spadochronImg} promotion={true} lowerPrice={400} price={650} title="Skok na spadochronie" incrementProductsIcon={props.incrementProductsIcon} addNewOrder={props.addNewOrder} />
            <Product image={travelImg} price={10000} title="Podróż dookoła świata" incrementProductsIcon={props.incrementProductsIcon} addNewOrder={props.addNewOrder} />
            <Product image={whiskeyImg} price={400} title="Degustacja Whiskey" incrementProductsIcon={props.incrementProductsIcon} addNewOrder={props.addNewOrder} />
        </div>
    );
}

export default Products;