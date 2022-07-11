import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singleProduct } from '../features/productsSlice';
import { formatPrice } from '../utils/helpers';
import { IMAGE_URL } from '../utils/constants';

const Item = ({ product }) => {
    const dispatch = useDispatch();
    const clickHandler = (id) => {
        dispatch(singleProduct(id));
    };
    const nepPrice = Number(product.price.substring(1)) * 125;
    return (
        <Wrapper>
            <div className='container'>
                <img src={`${IMAGE_URL}${product.image}`} alt={product.name} />
                <Link
                    to={`/products/${product.id}`}
                    className='link'
                    onClick={() => clickHandler(product.id)}>
                    <FaSearch></FaSearch>
                </Link>
            </div>
            <footer>
                <h5>{product.name}</h5>
                <p>Rs. {formatPrice(nepPrice)}</p>
            </footer>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    border: 2px solid var(--clr-gray);
    padding: 10px;
    box-shadow: var(--light-shadow);
    .container {
        position: relative;
        background: var(--clr-dark);
        border-radius: var(--radius);

        img {
            width: 100%;
            height: 300px;
            display: block;
            object-fit: cover;
            border-radius: var(--radius);
            transition: 0.3s linear;
            border: 1px solid var(--clr-gray);
        }
        .link {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--clr-red);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            transition: 0.3s linear;
            opacity: 0;
            cursor: pointer;
            svg {
                font-size: 1.25rem;
                color: var(--clr-white);
            }
        }

        &:hover img {
            opacity: 0.5;
        }
        &:hover .link {
            opacity: 1;
        }
    }
    footer {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    footer h5,
    footer p {
        margin-bottom: 10px;
        font-weight: 600;
    }

    footer p {
        color: var(--clr-red);
        letter-spacing: var(--spacing);
    }
`;
export default Item;
