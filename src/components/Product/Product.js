import React from 'react';
import style from './Product.module.css';

function Product({ data }) {
    console.log(data);
    return (
        <a className={style.cardProduct}>
            <img className={style.imgProduct} src={data.img} />
            <div className={style.btCP}>
                <div className={style.infor}>{data.info}</div>
                <div className={style.price}>{data.price}</div>
            </div>
        </a>
    );
}

export default Product;
