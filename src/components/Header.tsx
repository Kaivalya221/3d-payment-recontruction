import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">3D Pavement Reconstruction</h1>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/techniques">Techniques</Link></li>
                    <li><Link to="/methodology">Methodology</Link></li>
                    <li><Link to="/tools">Tools</Link></li>
                    <li><Link to="/case-studies">Case Studies</Link></li>
                    <li><Link to="/applications">Applications</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;