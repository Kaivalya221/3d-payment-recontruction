import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} 3D Pavement Reconstruction Project. All rights reserved.</p>
                <p>Contact us at: <a href="mailto:info@3dpavementreconstruction.com">info@3dpavementreconstruction.com</a></p>
            </div>
        </footer>
    );
};

export default Footer;