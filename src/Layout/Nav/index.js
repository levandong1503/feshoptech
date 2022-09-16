import classNames from 'classnames/bind';
import styles from './Nav.module.css';

const cx = classNames.bind(styles);
function Nav(props) {
    const changeCategory = (category) => {
        props.changeCategory(category);
    };

    return (
        <nav>
            <a className={cx('nav-item')} onClick={() => changeCategory('phone')}>
                ĐIỆN THOẠI
            </a>
            <a className={cx('nav-item')} onClick={() => changeCategory('clock')}>
                ĐỒNG HỒ
            </a>
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
