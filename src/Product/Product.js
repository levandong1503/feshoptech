import React from "react";
import style from "./Product.module.css"


function Product(){
    return(
        <a className={style.cardProduct}>
            <img className={style.imgProduct} src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/01/27/thumb.jpg" />
            <div className={style.btCP}>
                <div className={style.infor}>Samsung Galaxy S22 - 8GB/256GB - Chính hãng</div>
                <div className={style.
                    price}>3,890,000 d</div>
            </div>
        </a>

    )
}

export default Product