import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Techniques from './pages/Techniques';
import Methodology from './pages/Methodology';
import Tools from './pages/Tools';
import CaseStudies from './pages/CaseStudies';
import Applications from './pages/Applications';
import Contact from './pages/Contact';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/techniques" component={Techniques} />
        <Route path="/methodology" component={Methodology} />
        <Route path="/tools" component={Tools} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/applications" component={Applications} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;