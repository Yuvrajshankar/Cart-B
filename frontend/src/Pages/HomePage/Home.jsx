import React from 'react';
import "./Home.css";
import Slider from '../../components/Slider/Slider';
import Product from '../../components/Product/Product';

function Home() {
    return (
        <div className="home">
            <Slider />

            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default Home;