import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
    <div className="header-classes">
        <h1>General page</h1>
        <Link to='/'>Home</Link>
        <Link to='/detail'>Detail</Link>
        <div className=""><button type="button" className="btn btn-primary">Invoice</button></div>
        <div className=""><button type="button" className="btn btn-primary">Back</button></div>
    </div>
);
export default Header;