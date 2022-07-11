import React, { useEffect } from 'react';
import { Hero, Services, Contact } from '../components';
import { useDispatch } from 'react-redux';
import { getTotals } from '../features/cartSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotals());
    }, [dispatch]);

    return (
        <main>
            <Hero />
            {/* <FeaturedProducts /> */}
            <Services />
            <Contact />
        </main>
    );
};

export default Home;
