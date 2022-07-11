import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Footer, Header, Sidebar } from './components';
import {
    Home,
    SingleProduct,
    Cart,
    Error,
    About,
    Products,
    Checkout,
} from './pages';

function App() {
    return (
        <Router>
            <ToastContainer />
            <Header />
            <Navbar />
            <Sidebar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/products' element={<Products />} />
                <Route exact path='/products/:id' element={<SingleProduct />} />
                <Route exact path='/checkout' element={<Checkout />} />

                <Route exact path='*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
