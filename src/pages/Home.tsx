import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <h1>Welcome to 3D Pavement Reconstruction</h1>
                <p>
                    This project focuses on utilizing smartphone videos and structure-from-motion technology to reconstruct 3D models of pavement surfaces. Our goal is to enhance the understanding and management of pavement conditions through advanced imaging techniques.
                </p>
                <section>
                    <h2>Objectives</h2>
                    <ul>
                        <li>To develop a user-friendly method for pavement reconstruction using accessible technology.</li>
                        <li>To demonstrate the effectiveness of structure-from-motion in capturing detailed pavement features.</li>
                        <li>To explore various applications of 3D pavement models in civil engineering and urban planning.</li>
                    </ul>
                </section>
                <section>
                    <h2>Get Started</h2>
                    <p>
                        Explore our website to learn more about the techniques, methodology, tools, and case studies related to 3D pavement reconstruction. 
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;