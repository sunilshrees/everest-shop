import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants';
import styled from 'styled-components';
import CartButtons from './CartButtons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/sidebarSlice';

const Sidebar = () => {
    const isOpen = useSelector((state) => state.sidebar.isOpen);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleSidebar());
    };
    return (
        <SidebarContainer>
            <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
                <div className='sidebar-header'>
                    <button
                        className='close-btn'
                        type='button'
                        onClick={handleClick}>
                        <FaTimes></FaTimes>
                    </button>
                </div>
                <div className='center'>
                    <ul className='links'>
                        {links.map(({ id, text, url }) => {
                            return (
                                <li key={id} onClick={handleClick}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <CartButtons />
                </div>
            </aside>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.div`
    .sidebar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;

        position: absolute;
        top: 30px;
        right: 30px;
    }
    .close-btn {
        font-size: 2rem;
        background: transparent;
        border-color: transparent;
        color: var(--clr-primary-5);
        transition: var(--transition);
        cursor: pointer;
        color: var(--clr-red-dark);
        margin-top: 0.2rem;
    }
    .close-btn:hover {
        color: var(--clr-red-light);
    }
    .logo {
        justify-self: center;
        height: 45px;
    }
    .links {
        margin-bottom: 0rem;
    }
    .links a {
        display: block;
        text-align: center;
        font-size: 1.7rem;
        font-weight: 600;
        text-transform: capitalize;
        padding: 1rem 1.5rem;
        color: var(--clr-dark);
        transition: 0.3s linear;
        letter-spacing: var(--spacing);
    }

    .links a:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--clr-gray);
    }

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--clr-white);
        transition: 0.3s linear;
        transform: translate(-100%);
        z-index: -1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .show-sidebar {
        transform: translate(0);
        z-index: 999;
    }

    @media screen and (min-width: 992px) {
        .sidebar {
            display: none;
        }
    }
`;

export default Sidebar;
