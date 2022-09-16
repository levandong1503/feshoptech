import classNames from 'classnames/bind';
import { faMagnifyingGlass, faCartShopping, faCarSide } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.css';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header>
            <h1 className={cx('logo')}>DIENTUTHOTIEN</h1>
            <form className={cx('search-product')}>
                <input type="text" placeholder="Hôm nay bạn muốn mua gì ?" />
                <button className={cx('search-btn')} type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            <a className={cx('kt-dh')} href="#">
                <FontAwesomeIcon icon={faCarSide} />
                <span>Kiểm tra đơn hàng</span>
            </a>
            <a className={cx('card-shopping')}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className={cx('angle')}></span>
                <span className={cx('number-product')}>0</span>
            </a>
            <div className={cx('root')}></div>
        </header>
    );
}

export default Header;
