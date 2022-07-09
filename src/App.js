import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Header } from './components';
import { Home, SingleProduct, Cart, Error, About, Products } from './pages';

function App() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/products' element={<Products />} />
                <Route exact path='/products/:id' element={<SingleProduct />} />

                <Route exact path='*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
