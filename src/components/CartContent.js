import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils/helpers';
import CartItem from './CartItem';

const CartContent = ({ cartItems }) => {
    const { cartTotalAmount } = useSelector((state) => state.cart);

    return (
        <Wrapper className='section section-center'>
            <section className='columns'>
                <div className='content'>
                    <h5>item</h5>
                    <h5>price</h5>
                    <h5>quantity</h5>
                    <h5>subtotal</h5>
                    <span></span>
                </div>
                <hr />
            </section>
            {cartItems.map((item) => {
                return <CartItem key={item.id} item={item} />;
            })}

            <hr />
            <div className='link-container'>
                <Link to='/products' className='link-btn'>
                    continue shopping
                </Link>
                <button
                    type='button'
                    className='link-btn clear-btn'
                    // onClick={clearCart}
                >
                    clear shopping cart
                </button>
            </div>
            <section className='total'>
                <div>
                    <article>
                        <h5>
                            Subtotal :{' '}
                            <span>Rs. {formatPrice(cartTotalAmount)}</span>
                        </h5>
                        <h5>
                            Shipping fee :<span>Rs. 100</span>
                        </h5>
                        <hr />
                        <h4>
                            Order total :
                            <span>
                                Rs. {formatPrice(cartTotalAmount + 100)}
                            </span>
                        </h4>
                    </article>

                    <Link to='/checkout' className='btn'>
                        proceed to checkout
                    </Link>
                </div>
            </section>
        </Wrapper>
    );
};
const Wrapper = styled.section`
    .columns {
        display: none;
        @media (min-width: 776px) {
            display: block;
            .content {
                display: grid;
                grid-template-columns: 316px 1fr 1fr 1fr auto;
                justify-items: center;
                column-gap: 1rem;
                h5 {
                    color: var(--clr-grey-5);
                    font-weight: 400;
                }
            }

            span {
                width: 2rem;
                height: 2rem;
            }
            hr {
                margin-top: 1rem;
                margin-bottom: 3rem;
            }
        }
    }

    .link-container {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }
    .link-btn {
        background: transparent;
        border-color: transparent;
        text-transform: capitalize;
        padding: 0.25rem 0.5rem;
        background: var(--clr-primary-5);
        color: var(--clr-white);
        border-radius: var(--radius);
        letter-spacing: var(--spacing);
        font-weight: 400;
        cursor: pointer;
    }
    .clear-btn {
        background: var(--clr-black);
    }
    .total {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        article {
            border: 1px solid var(--clr-gray);
            border-radius: var(--radius);
            padding: 1.5rem 3rem;
        }
        h4,
        h5 {
            display: grid;
            grid-template-columns: 200px 1fr;
        }

        h4 {
            margin-top: 2rem;
        }
        @media (min-width: 776px) {
            justify-content: flex-end;
        }
        .btn {
            width: 100%;
            margin-top: 1rem;
            text-align: center;
            font-weight: 700;
        }
    }
`;
export default CartContent;
