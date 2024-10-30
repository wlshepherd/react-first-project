import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    );
};

export default App;