import React from 'react';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartButtons = () => {
    return (
        <Wrapper className='cart-btn-wrapper'>
            <Link to='/cart' className='cart-btn'>
                <span className='cart-container'>
                    <FaShoppingCart className='cart' />
                    <span className='cart-value'>0</span>
                </span>
            </Link>

            <button type='button' className='auth-btn'>
                Login <FaUserPlus />
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 150px;

    .cart-btn {
        color: var(--clr-grey-1);
        font-size: 1.5rem;
        letter-spacing: var(--spacing);
        color: var(--clr-grey-1);
        display: flex;

        align-items: center;
    }
    .cart-container {
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
        height: 35px;
        width: 35px;
        background: var(--clr-gray);
        border-radius: 50%;
        svg {
            height: 1.5rem;
        }
    }

    .cart-value {
        position: absolute;
        top: -10px;
        right: -12px;
        background: var(--clr-red);
        width: 9px;
        height: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 0.75rem;
        color: var(--clr-white);
        padding: 12px;
    }
    .auth-btn {
        display: flex;
        align-items: center;
        background: transparent;
        border-color: transparent;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        color: var(--clr-grey-1);
        letter-spacing: var(--spacing);
        svg {
            margin-left: 5px;
        }
    }
`;
export default CartButtons;
