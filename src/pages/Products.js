import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageHero, Sort, ProductsList } from '../components';
import { useDispatch } from 'react-redux';
import { getTotals } from '../features/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotals());
    }, [dispatch]);

    return (
        <main>
            <PageHero title='Products' />
            <Wrapper className='page'>
                <div className='section-center products'>
                    <div>
                        <Sort />
                        <ProductsList />
                    </div>
                </div>
            </Wrapper>
        </main>
    );
};

const Wrapper = styled.div`
    .products {
        display: grid;
        gap: 3rem 1.5rem;
        margin: 4rem auto;
    }
    @media (min-width: 768px) {
        .products {
            grid-template-columns: 1fr;
        }
    }
`;
export default Products;
