import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../components/Home';
import Products from '../components/Products';
import About from '../components/About';
import Terms from '../components/Terms';

export default function Nav(props) {

    const showShoppingCart = () => {
        const cart = document.querySelector('.orders');
        cart.style.left = '0%';
    };

    let changeFlag = true;
    const generateHideMenuBtn = () => {

        const showMenuIcon = document.querySelector('.navigation-button__icon');
        if (changeFlag) {
            showMenuIcon.classList.remove('fas', 'fa-bars');
            showMenuIcon.classList.add('far', 'fa-times-circle');
            changeFlag = false;
        } else if (!changeFlag) {
            showMenuIcon.classList.remove('far', 'fa-times-circle');
            showMenuIcon.classList.add('fas', 'fa-bars');
            changeFlag = true;
        }
    };
    const showMenuFn = () => {
        const navigation = document.querySelector('.navigation');
        navigation.classList.toggle('navigation--active');

        generateHideMenuBtn();


    };
    return (

        < Router >
            <div>
                <div className="shoping-cart">
                    {props.productsInCart > 0 ? <span className="shoping-cart__products-number">{props.productsInCart}</span> : null}
                    <i onClick={() => showShoppingCart()} className="fas fa-shopping-cart shoping-cart__icon"></i>
                </div>
                <div className="navigation-button" onClick={showMenuFn}>
                    <i className="fas fa-bars navigation-button__icon"></i>
                </div>
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <Link className="navigation__text" onClick={showMenuFn} to="/">Home</Link>
                        </li>
                        <li className="navigation__item">
                            <Link className="navigation__text" onClick={showMenuFn} to="/products">Produkty</Link>
                        </li>
                        <li className="navigation__item">
                            <Link className="navigation__text" onClick={showMenuFn} to="/about">O sklepie</Link>
                        </li>
                        <li className="navigation__item">
                            <Link className="navigation__text" onClick={showMenuFn} to="/users">Regulamin</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Terms />
                    </Route>
                    <Route path="/products">
                        <Products incrementProductsIcon={props.incrementProductsIcon} addNewOrder={props.addNewOrder} />
                    </Route>
                    <Route path="/">
                        <Home incrementProductsIcon={props.incrementProductsIcon} addNewOrder={props.addNewOrder} />
                    </Route>
                </Switch>
            </div>
        </Router >
    );
};