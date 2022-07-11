import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/sidebarSlice';

const Nav = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const controlNavbar = () => {
        if (window.scrollY >= 31) {
            setShow(true);
        } else {
            setShow(false);
        }
    };
    const handleClick = () => {
        dispatch(toggleSidebar());
    };
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    return (
        <NavContainer className={show ? 'fixed' : null}>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h3>
                        <Link to='/'>
                            Everest<span>Shop</span>
                        </Link>
                    </h3>
                    <button
                        type='button'
                        className='nav-toggle'
                        onClick={handleClick}>
                        <FaBars />
                    </button>
                </div>

                <ul className='nav-links'>
                    {links.map((link) => {
                        const { id, text, url } = link;
                        return (
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        );
                    })}

                    {/* {myUser && (
                        <li>
                            <Link to='/checkout'>Checkout</Link>
                        </li>
                    )} */}
                    <CartButtons />
                </ul>
            </div>
        </NavContainer>
    );
};

const NavContainer = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--light-shadow);
    z-index: 40;

    background: var(--clr-white);

    // &.fixed {
    //     position: fixed;
    //     top: 0;
    //     box-shadow: var(--dark-shadow);
    // }

    .nav-center {
        width: 90vw;
        margin: 0 auto;
        max-width: var(--max-width);
    }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            color: var(--clr-dark);
            font-weight: 800;
            text-transform: uppercase;
        }

        a span {
            color: var(--clr-red);
        }
    }
    .nav-toggle {
        background: transparent;
        border: transparent;
        color: var(--clr-dark);
        cursor: pointer;
        svg {
            font-size: 2rem;
        }
    }
    .nav-links {
        display: none;
    }
    .cart-btn-wrapper {
        display: none;
    }

    @media (min-width: 992px) {
        .nav-toggle {
            display: none;
        }
        .nav-center {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        .nav-links {
            display: flex;
            justify-content: end;
            align-items: center;
            li {
                margin: 0 0.5rem;
            }
            a {
                color: var(--clr-dark);
                font-size: 1.2rem;
                font-weight: 600;
                text-transform: capitalize;
                letter-spacing: var(--spacing);
                padding: 0.5rem;
                border-bottom: 2px solid transparent;
                transition: border-bottom 0.3s ease;
            }
        }
        .cart-btn-wrapper {
            display: grid;
        }
    }
`;

export default Nav;
