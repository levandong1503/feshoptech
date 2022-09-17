import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { publicRoutes } from './routes';
import Header from './Layout/components/Header';
import Default from './Layout/Default';
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Page = route.component;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Default>
                                    <Page />
                                </Default>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
