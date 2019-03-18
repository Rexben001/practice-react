import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { branding } = props;
    return (
        <div className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"> Home</Link>
                            <Link to="/contacts/add" className="nav-link"> Add</Link>
                            <Link to="/about" className="nav-link"> HomAboute</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

Header.defaultProps = {
    branding: 'Contact Manager'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}
export default Header;