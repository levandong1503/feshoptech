import { Fragment } from 'react';
import Nav from '../Nav';

function Default({ children }) {
    return (
        <Fragment>
            <Nav />
            <div className="root">{children}</div>
        </Fragment>
    );
}

export default Default;
