import logo from './logo.svg';
import './App.css'; 
import Product from './component/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from './Layout/DefaultLayout';
function App() {
    fetch('https://localhost:44347/json/chi-tiet-sp/1')
        .then(res => {   return res.json()})
        .then(res => {console.log(res);})
        .catch(err => console.log(err))
    return (
        <div className="root">
           <DefaultLayout>
            
            
            <div className="container">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            </DefaultLayout>
            
        </div>
    );
}

export default App;
