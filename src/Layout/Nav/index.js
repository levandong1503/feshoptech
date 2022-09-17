import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Nav.module.css';
import { switchCategory } from '../../redux/categorySlice';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Nav() {
    let category = useSelector((state) => state.category);
    const dispatch = useDispatch();
    console.log(category);

    return (
        <nav>
            <Link
                to="/category/1"
                onClick={(e) => {
                    dispatch(switchCategory('1'));
                }}
                className={cx('nav-item')}
            >
                ĐIỆN THOẠI
            </Link>
            <Link
                to="/category/2"
                onClick={(e) => {
                    dispatch(switchCategory('2'));
                }}
                className={cx('nav-item')}
            >
                ĐỒNG HỒ
            </Link>
            <a className={cx('nav-item')} href="#">
                LAPTOP
            </a>
            <a className={cx('nav-item')} href="#">
                TAI NGHE
            </a>
            <a className={cx('nav-item')} href="#">
                TABLET
            </a>
            <a className={cx('nav-item')} href="#">
                ĐỒ CHƠI CÔNG NGHỆ
            </a>
        </nav>
    );
}

export default Nav;
