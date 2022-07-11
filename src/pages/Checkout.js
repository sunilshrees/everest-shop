import React from 'react';
import styled from 'styled-components';
import { PageHero, CheckoutForm } from '../components';

const Checkout = () => {
    return (
        <main>
            <PageHero title='checkout' />
            <Wrapper className='page'>
                <CheckoutForm />
            </Wrapper>
        </main>
    );
};
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default Checkout;
