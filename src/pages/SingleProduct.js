import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProduct } from '../features/productsSlice';
import { PageHero } from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import { addToCart } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';
import { IMAGE_URL } from '../utils/constants';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const singleProduct = useSelector(getSingleProduct);
    const { id, name, image, price, stock, createDate } = singleProduct[0];

    const [amount, setAmount] = useState(1);

    const nepPrice = Number(price.substring(1)) * 125;

    const productToCart = { id, name, image, nepPrice, stock, amount };

    const clickHandler = (product) => {
        dispatch(addToCart(product));
        navigate('/cart');
    };
    const inc = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1;
            if (tempAmount > stock) {
                tempAmount = stock;
            }
            return tempAmount;
        });
    };
    const dec = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1;
            if (tempAmount < 1) {
                tempAmount = 1;
            }
            return tempAmount;
        });
    };

    return (
        <Wrapper>
            <PageHero title={name} product />
            <div className='section section-center page'>
                <Link to='/products' className='btn'>
                    back to products
                </Link>
                <div className='product-center'>
                    <section className='image'>
                        <img
                            src={`${IMAGE_URL}${image}`}
                            alt='main'
                            className='main'
                        />
                    </section>
                    <section className='content'>
                        <h2>{name}</h2>

                        <h5 className='price'>Rs. {formatPrice(nepPrice)}</h5>
                        <p className='desc'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reiciendis ut ratione eum mollitia minima
                            ducimus.
                        </p>
                        <p className='info'>
                            <span>Available : </span>
                            {stock ? 'In Stock' : 'Out of Stock'}
                        </p>
                        <p className='info'>
                            <span>SKU :</span>
                            {id}
                        </p>
                        <p className='info'>
                            <span>Brand :</span>
                            {name.split(' ')[0]}
                        </p>
                        <p className='info'>
                            <span>Created Date :</span>
                            {` ${new Date(createDate).toLocaleDateString(
                                'en-GB',
                                {
                                    day: 'numeric',
                                    month: 'numeric',
                                    year: 'numeric',
                                }
                            )}`}
                        </p>
                        <p className='info'>
                            <span>Amount :</span>
                            <div className='buttons'>
                                <button onClick={dec}>-</button>

                                <h4>{amount}</h4>

                                <button onClick={inc}>+</button>
                            </div>
                        </p>

                        <hr />
                        {/* <AddToCart /> */}
                        {stock && (
                            <button
                                className='btn hero-btn'
                                onClick={() => clickHandler(productToCart)}>
                                Add to cart
                            </button>
                        )}
                    </section>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    .hero-btn {
        margin-top: 1rem;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
    }
    .image {
        .main {
            height: 600px;
        }
        img {
            width: 100%;
            display: block;
            border-radius: var(--radius);
            object-fit: cover;
        }

        @media (max-width: 576px) {
            .main {
                height: 300px;
            }
        }
        @media (min-width: 992px) {
            .main {
                height: 500px;
            }
        }
    }
    .product-center {
        display: grid;
        gap: 4rem;
        margin-top: 2rem;
    }
    .content > p {
        color: var(--clr-dark);
    }
    .price {
        color: var(--clr-primary-5);
    }
    .desc {
        line-height: 2;
        max-width: 45em;
    }
    .info {
        text-transform: capitalize;
        width: 300px;
        display: grid;
        grid-template-columns: 125px 1fr;
        align-items: center;
        span {
            font-weight: 700;
        }
        .buttons {
            display: grid;
            width: 150px;
            justify-items: center;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            justify-content: center;

            button {
                background: var(--clr-gray);
                border-color: transparent;
                cursor: pointer;
                padding: 1rem 0;
                width: 2rem;
                height: 1rem;
                font-size: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            h4 {
                margin: 0 10px;
            }
        }
    }

    @media (min-width: 992px) {
        .product-center {
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        .price {
            font-size: 1.25rem;
        }
    }
`;

export default SingleProduct;
