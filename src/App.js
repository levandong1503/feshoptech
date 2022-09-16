import './App.css';
import Product from './components/Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useEffect, useState } from 'react';
import Header from './Layout/Header';
import Nav from './Layout/Nav';
function App() {
    const [category, setCategory] = useState('phone');
    const [product, setProduct] = useState([{ id: 1, img: 'noImg', info: 'phone', price: '123' }]);

    const getCategory = (category) => {
        setCategory(category);
    };
    console.log(product);
    // useEffect(() => {
    //     fetch(`url/${category}`)
    //         .then((res) => res.json())
    //         .then((res) => setProduct(res.data));
    // }, [category]);
    return (
        <Fragment>
            <Header />
            <Nav changeCategory={getCategory} />
            <div className="root">
                <div className="container">
                    {product.map((data) => (
                        <Product key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default App;
