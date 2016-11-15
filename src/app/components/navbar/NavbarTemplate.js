import React from 'react';
import { Link, IndexLink } from 'react-router';

const NavbarTemplate = (props) => {
    return (
        <div>
            <IndexLink to="/"> Home </IndexLink> |
            <Link to="/about"> About </Link>
        </div>
    );
};

export default NavbarTemplate;
