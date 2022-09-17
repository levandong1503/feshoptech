import { Fragment } from "react";

import { faMagnifyingGlass, faCartShopping, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DefaultLayout.css";
import Footer from "../component/Footer/Footer";
function DefaultLayout({children}) {
    return ( <Fragment>
         <header>
                <div className="img-logo">
                    <img src="https://hoanghamobile.com//Content/web/img/logo-text.png" />
                </div>
                <form className="search-product">
                    <input type="text" placeholder="Hôm nay bạn muốn mua gì ?" />
                    <button type="submit"> 
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                       
                    </button>
                </form>
                <a className="kt-dh" href="#">
                    <FontAwesomeIcon icon={faTruckMoving} />
                    <span>Kiểm tra đơn hàng</span>
                </a>
                <a className="card">
                    <FontAwesomeIcon icon={faCartShopping} size="lg"  />
                    <span className="angle"></span>
                    <span className="number-product">0</span>
                </a>
                <div className="root"></div>
        </header>
        <nav>
        <div className="nav-group">
            <a className="nav-item" href="#">ĐỒNG HỒ</a>
                <section>
                    <div className="nav-supper dropsupport">
                        <div className="nav-area">

                            <div className="nav-path">
                                <h3 href="./social.html" className="header-path">Hãng sản xuất</h3>
                                <ul className="ul-nav-path">
                                    <li><a href="./social.html" className="a-nav-path">Apple</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Xaomi</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Apple</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Xaomi</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Apple</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Xaomi</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                </ul>
                            </div>

                            <div className="nav-path">
                                <h3 href="./social.html" className="header-path">Hãng sản xuất</h3>
                                <ul className="ul-nav-path">
                                    <li><a href="./social.html" className="a-nav-path">Apple</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Xaomi</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Apple</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Xaomi</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Apple</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Xaomi</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                </ul>
                            </div>

                            <div className="nav-path">
                                <h3 href="./social.html" className="header-path">Hãng sản xuất</h3>
                                <ul className="ul-nav-path">
                                    <li><a href="./social.html" className="a-nav-path">Apple</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Xaomi</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Apple</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Xaomi</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Apple</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Xaomi</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                    <li><a href="./social.html" className="a-nav-path">Nokia</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='clrcrs'></div>
                    </div>
                </section>
            </div>
            <a className="nav-item" href="#">ĐỒNG HỒ</a>
            <a className="nav-item" href="#">LAPTOP</a>
            <a className="nav-item" href="#">TAI NGHE</a>
            <a className="nav-item" href="#">TABLET</a>
            <a className="nav-item" href="#">ĐỒ CHƠI CÔNG NGHỆ</a>
        </nav>

        {children}
        <Footer/>
    </Fragment> );
}

export default DefaultLayout;