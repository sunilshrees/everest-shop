import React, { useEffect } from 'react';
import styled from 'styled-components';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchProducts,
    getProductsLoading,
    getAllProducts,
    getProductsError,
} from '../features/productsSlice';

const ProductsList = () => {
    const products = useSelector(getAllProducts);
    const loading = useSelector(getProductsLoading);
    const error = useSelector(getProductsError);

    const dispatch = useDispatch();

    const key = 'name';

    const uniqueProducts = [
        ...new Map(products.map((item) => [item[key], item])).values(),
    ];

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    if (products.length < 1) {
        return (
            <Wrapper>
                <div className='products-container'>No products found...</div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            {loading && <div>Loading...</div>}
            {!loading && error && <div>{error}</div>}
            <div className='products-container'>
                {uniqueProducts.map((product) => {
                    return <Item key={product.id} product={product} />;
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .products-container {
        display: grid;
        gap: 3rem;
    }

    @media (min-width: 992px) {
        .products-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 1170px) {
        .products-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;

export default ProductsList;
