import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
    getAllProducts,
    getProductsContainer,
} from '../features/productsSlice';
import { useEffect, useState } from 'react';
import { sortBy, categoryFilter } from '../features/productsSlice';
import { getUniqueValues } from '../utils/helpers';
const Sort = () => {
    const products = useSelector(getAllProducts);
    const productsContainer = useSelector(getProductsContainer);

    const key = 'name';
    const uniqueProducts = [
        ...new Map(products.map((item) => [item[key], item])).values(),
    ];

    const dispatch = useDispatch();
    // const [searchTerm, setSearchTerm] = useState('');
    const [sort, setSort] = useState('best-match');
    const [category, setCategory] = useState('all');

    // const changeSearchTerm = (e) => {
    //     setSearchTerm(e.target.value);
    // };
    const changeSort = (e) => {
        setSort(e.target.value);
    };
    const changeCategory = (e) => {
        setCategory(e.target.value);
    };
    useEffect(() => {
        // dispatch(searchByName(searchTerm));
        dispatch(sortBy(sort));
        dispatch(categoryFilter(category));
    }, [sort, category, dispatch]);

    const categories = getUniqueValues(productsContainer, 'category');
    const cat = categories.filter((c) => c !== 'electronic');
    return (
        <Wrapper>
            {/* <div className='search'>
                <input
                    type='text'
                    name='text'
                    className='searchTerm'
                    placeholder='Search products..'
                    value={searchTerm}
                    onChange={(e) => changeSearchTerm(e)}
                    autoComplete='off'
                />
            </div> */}
            <form>
                <label htmlFor='sort'>sort by</label>
                <select
                    name='sort'
                    id='sort'
                    className='sort-input'
                    value={sort}
                    onChange={(e) => changeSort(e)}>
                    <option value='best-match'>Best Match</option>
                    <option value='price-lowest'>Price (lowest)</option>
                    <option value='price-highest'>Price (highest)</option>
                    <option value='date-new'>Date added (new)</option>
                    <option value='date-old'>Date added (old)</option>
                </select>
            </form>
            <form>
                <label htmlFor='sort'>Category</label>
                <select
                    name='cat'
                    id='cat'
                    className='sort-input'
                    value={category}
                    onChange={(e) => changeCategory(e)}>
                    {cat.map((c, i) => {
                        return (
                            <option key={i} value={c}>
                                {c}
                            </option>
                        );
                    })}
                </select>
            </form>
            <hr />
            <p>
                <span>{uniqueProducts.length}</span> product
                {uniqueProducts.length > 1 ? 's' : null} found
            </p>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    margin-bottom: 2rem;
    column-gap: 2rem;
    @media (max-width: 940px) {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.75rem;
        .btn-container {
            width: 50px;
        }
        label {
            display: inline-block;
            margin-right: 0.5rem;
        }
    }
    @media (min-width: 768px) {
        column-gap: 2rem;
    }
    p {
        color: var(--clr-dark);
        text-transform: capitalize;
        margin-bottom: 0;
        position: relative;
        span {
            color: var(--clr-red);
        }
    }

    .btn-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 0.5rem;
        button {
            background: transparent;
            border: 1px solid var(--clr-black);
            color: var(--clr-black);
            width: 1.5rem;
            border-radius: var(--radius);
            height: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            svg {
                font-size: 1rem;
            }
        }
        .active {
            background: var(--clr-black);
            color: var(--clr-white);
        }
    }

    .sort-input {
        border-color: var(--clr-gray-light);
        font-size: 1rem;
        text-transform: capitalize;
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
        cursor: pointer;
    }
    label {
        font-size: 1rem;
        text-transform: capitalize;
        margin-right: 10px;
    }
    .search {
        width: 100%;
        position: relative;
        display: flex;
        font-family: Raleway;
    }

    .searchTerm {
        width: 100%;
        border: 2px solid var(--clr-gray);
        padding: 10px;
        height: 25px;
        border-radius: 5px;
        outline: none;
        color: var(--clr-red-light);
    }

    .searchTerm:focus {
        color: var(--clr-red-light);
    }
    .searchTerm::placeholder {
        color: var(--clr-gray);
    }
`;

export default Sort;
