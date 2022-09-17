import React from 'react';
import { Link } from 'react-router-dom';

import style from './Product.module.css';

function Product({ data }) {
    return (
        <Link to={`/category/product/${data.id}`} className={style.cardProduct}>
            <img className={style.imgProduct} src={data.img} />
            <div className={style.btCP}>
                <div className={style.info}>{data.info}</div>
                <div className={style.price}>{data.price}</div>
            </div>
        </Link>
    );
}

export default Product;
