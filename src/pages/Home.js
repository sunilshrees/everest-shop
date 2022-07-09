import React from 'react';
import { Hero, Services, Contact } from '../components';

const Home = () => {
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
