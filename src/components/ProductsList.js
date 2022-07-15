import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchProducts,
    getProductsLoading,
    getAllProducts,
    getProductsError,
} from '../features/productsSlice';
import ReactPaginate from 'react-paginate';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const ProductsList = () => {
    const products = useSelector(getAllProducts);
    const loading = useSelector(getProductsLoading);
    const error = useSelector(getProductsError);
    const [pageNumber, setPageNumber] = useState(0);

    const dispatch = useDispatch();

    const key = 'name';

    const uniqueProducts = [
        ...new Map(products.map((item) => [item[key], item])).values(),
    ];

    const productsPerPage = 8;
    const pagesVisited = pageNumber * productsPerPage;

    const displayUsers = products
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((product) => {
            return <Item key={product.id} product={product} />;
        });
    const pageCount = Math.ceil(products.length / productsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

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
                {/* {uniqueProducts.map((product) => {
                    return <Item key={product.id} product={product} />;
                })} */}

                {displayUsers}
            </div>
            <div className='paginate'>
                <ReactPaginate
                    previousLabel={<AiOutlineLeft />}
                    nextLabel={<AiOutlineRight />}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBtn'}
                    nextLinkClassName={'nextBtn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .products-container {
        display: grid;
        gap: 3rem;

        margin-bottom: 80px;
    }
    .paginate {
        margin-top: 50px;
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
