import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../features/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    if (cartItems.length < 1) {
        return (
            <Wrapper className='page-100'>
                <div className='empty'>
                    <h2>Your cart is empty.</h2>
                    <Link to='/products' className='btn'>
                        Fill it
                    </Link>
                </div>
            </Wrapper>
        );
    }
    return (
        <main>
            <PageHero title='cart' />
            <Wrapper className='page'>
                <CartContent cartItems={cartItems} />
            </Wrapper>
        </main>
    );
};

const Wrapper = styled.main`
    .empty {
        text-align: center;
        h2 {
            margin-bottom: 1rem;
            text-transform: none;
        }
    }
`;

export default Cart;
