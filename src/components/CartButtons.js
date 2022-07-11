import React from 'react';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/sidebarSlice';
const CartButtons = () => {
    const dispatch = useDispatch();
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const handleClick = () => {
        dispatch(toggleSidebar());
    };
    return (
        <Wrapper className='cart-btn-wrapper'>
            <Link to='/cart' className='cart-btn' onClick={handleClick}>
                <span className='cart-container'>
                    <FaShoppingCart className='cart' />
                    <span className='cart-value'>{cartTotalQuantity}</span>
                </span>
            </Link>

            <button type='button' className='auth-btn' onClick={handleClick}>
                Login <FaUserPlus />
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: -1rem;

    .cart-btn {
        font-size: 1.5rem;
        letter-spacing: var(--spacing);
        display: flex;
        align-items: center;
        margin: 0.5rem 1.5rem 1rem;
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
        font-size: 1.7rem;
        font-family: Raleway;
        font-weight: 600;
        cursor: pointer;
        letter-spacing: var(--spacing);
        margin-left: 20px;
        svg {
            margin-left: 5px;
        }
    }
    @media screen and (min-width: 992px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        width: 150px;

        margin-left: 14vw;

        .auth-btn {
            font-size: 1.2rem;
            margin-left: 0;
        }
    }
`;
export default CartButtons;
