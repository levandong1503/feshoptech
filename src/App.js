import logo from './logo.svg';
import './App.css';
import ProductDetail from './ProductDetail/ProductDetail';
import Product from './Product/Product';
function App() {
  
  return (
    <div className='root'>
      <header>
        <h1 className="logo">
            DIENTUTHOTIEN
        </h1>
        <form className="search-product">
            <input type="text" placeholder="Hôm nay bạn muốn mua gì ?"/>
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <a className="kt-dh" href="#">
            <i className="fa-regular fa-car-side"></i>
            <span>
                Kiểm tra đơn hàng
            </span>
        </a>
        <a className="card">
            <i className="fa-light fa-cart-shopping"></i>
            <span className="angle"></span>
            <span className="number-product">0</span>
        </a>
        <div className="root">
        </div>
    </header>
    <nav>
        <a className="nav-item" href="#" >ĐIỆN THOẠI</a>
        <a className="nav-item" href="#">ĐỒNG HỒ</a>
        <a className="nav-item" href="#">LAPTOP</a>
        <a className="nav-item" href="#">TAI NGHE</a>
        <a className="nav-item" href="#">TABLET</a>
        <a className="nav-item" href="#">ĐỒ CHƠI CÔNG NGHỆ</a>
    </nav>
    <div className='container'>
      
        <Product /><Product /><Product /><Product /><Product />
        <Product /><Product /><Product /><Product /><Product />
    </div>
  </div>
    
  );
}

export default App;
