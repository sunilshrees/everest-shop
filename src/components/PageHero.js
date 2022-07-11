import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const PageHero = ({ title, product }) => {
    return (
        <Wrapper>
            <div className='section-center'>
                <h3>
                    <Link to='/'>Home</Link>/
                    {product && <Link to='/products'> Products /</Link>} {title}
                </h3>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background: var(--clr-gray);
    width: 100%;
    min-height: 20vh;
    display: flex;
    padding:30px;
    align-items: center;
    paddin

    color: var(--clr-dark);
    a {
        color: var(--clr-red);
        padding: 0.5rem;
        transition: 0.3s linear;
    }
    a:hover {
        color: var(--clr-dark);
        transition: 0.3s linear;
    }
`;

export default PageHero;
