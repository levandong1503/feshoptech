import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '../../components/Product/Product';
import styles from './Products.module.css';

const cx = classnames.bind(styles);

function Products() {
    let category = useSelector((state) => state.category.value);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/product/${category}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
    }, [category]);
    return (
        <div className={cx('container')}>
            {products.map((product) => {
                return <Product key={product.id} data={product} />;
            })}
        </div>
    );
}

export default Products;
