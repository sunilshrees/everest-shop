import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { IMAGE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { singleProduct } from '../features/productsSlice';
import { removeFromCart } from '../features/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const { id, image, name, nepPrice } = item;
    const removeItem = (product) => {
        dispatch(removeFromCart(product));
    };
    const clickHandler = (id) => {
        dispatch(singleProduct(id));
    };
    return (
        <Wrapper>
            <div className='title'>
                <Link
                    to={`/products/${id}`}
                    className='link'
                    onClick={() => clickHandler(id)}>
                    <img src={`${IMAGE_URL}${image}`} alt={name} />
                </Link>

                <div>
                    <h5 className='name'>{name}</h5>

                    <h5 className='price-small'>Rs.{formatPrice(nepPrice)}</h5>
                </div>
            </div>
            <h5 className='price'>Rs. {formatPrice(nepPrice)}</h5>

            <AmountButtons amount={item.cartQuantity} item={item} />

            <h5 className='subtotal'>
                Rs. {formatPrice(nepPrice * item.cartQuantity)}
            </h5>
            <button
                type='button'
                className='remove-btn'
                onClick={() => removeItem(item)}>
                <FaTrash />
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    display: grid;
    grid-template-columns: 200px auto auto;
    grid-template-rows: 75px;
    gap: 3rem 1rem;
    justify-items: center;
    margin-bottom: 3rem;
    align-items: center;

    .subtotal {
        display: none;
    }
    .price {
        display: none;
    }

    .title {
        grid-template-rows: 75px;
        display: grid;
        grid-template-columns: 75px 125px;
        align-items: center;
        text-align: left;
        gap: 1rem;
    }
    img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: var(--radius);
        object-fit: cover;
    }
    h5 {
        font-size: 0.75rem;
        margin-bottom: 0;
    }

    .color {
        color: var(--clr-grey-5);
        font-size: 0.75rem;
        letter-spacing: var(--spacing);
        text-transform: capitalize;
        margin-bottom: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        span {
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            background: red;
            margin-left: 0.5rem;
            border-radius: var(--radius);
        }
    }
    .price-small {
        color: var(--clr-primary-5);
    }
    .amount-btn {
        width: 75px;
        button {
            width: 1rem;
            height: 0.5rem;
            font-size: 0.75rem;
        }
        h2 {
            font-size: 1rem;
        }
    }
    .remove-btn {
        color: var(--clr-white);
        background: transparent;
        border: transparent;
        letter-spacing: var(--spacing);
        background: var(--clr-red);
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius);
        font-size: 0.75rem;
        cursor: pointer;
    }
    @media (min-width: 776px) {
        grid-template-columns: 1fr 1fr 1fr 1fr auto;
        align-items: center;
        grid-template-rows: 75px;

        .subtotal {
            display: block;
            margin-bottom: 0;
            color: var(--clr-grey-5);
            font-weight: 400;
            font-size: 1rem;
        }
        .price-small {
            display: none;
        }
        .price {
            display: block;
            font-size: 1rem;
            color: var(--clr-primary-5);
            font-weight: 400;
        }
        .name {
            font-size: 0.85rem;
        }
        .color {
            font-size: 0.85rem;
            span {
                width: 0.75rem;
                height: 0.75rem;
            }
        }

        img {
            height: 100%;
        }
        .title {
            height: 100%;
            display: grid;
            grid-template-columns: 100px 200px;
            align-items: center;
            gap: 1rem;
            text-align: left;
        }
        .amount-btns {
            width: 100px;
            button {
                width: 1.5rem;
                height: 1rem;
                font-size: 1rem;
            }
            h2 {
                font-size: 1.5rem;
            }
        }
    }
`;

export default CartItem;
