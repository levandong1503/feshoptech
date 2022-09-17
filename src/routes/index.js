import CardShopping from '../Pages/CardShopping';
import ProductDetail from '../Pages/ProductDetail';
import Products from '../Pages/Products';

export const publicRoutes = [
    {
        path: '/category/:id',
        component: Products,
    },
    {
        path: '/',
        component: Products,
    },
    {
        path: '/category/product/:id',
        component: ProductDetail,
    },
    {
        path: '/card/:id',
        component: CardShopping,
    },
];
