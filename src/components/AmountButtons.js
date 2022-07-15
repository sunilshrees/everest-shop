import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCart } from '../features/cartSlice';

const AmountButtons = ({ amount, item }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    return (
        <Wrapper className='amount-btns'>
            <button
                type='button'
                className='amount-btn'
                onClick={() => handleDecreaseCart(item)}>
                <FaMinus />
            </button>
            <h2 className='amount'>{amount}</h2>
            <button
                type='button'
                className='amount-btn'
                onClick={() => handleAddToCart(item)}>
                <FaPlus />
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    width: 40px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    h2 {
        margin-bottom: 0;
    }
    button {
        background: transparent;
        border-color: transparent;
        cursor: pointer;
        padding: 1rem 0;
        width: 2rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2 {
        margin-bottom: 0;
    }
    @media (min-width: 500px) {
        width: 140px;
    }
`;

export default AmountButtons;
