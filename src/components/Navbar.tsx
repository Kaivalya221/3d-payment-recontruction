import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/techniques">Techniques</Link>
                </li>
                <li>
                    <Link to="/methodology">Methodology</Link>
                </li>
                <li>
                    <Link to="/tools">Tools</Link>
                </li>
                <li>
                    <Link to="/case-studies">Case Studies</Link>
                </li>
                <li>
                    <Link to="/applications">Applications</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;