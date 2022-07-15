import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <div className='width-100'>
            <Wrapper>
                <div className='section-center'>
                    <h3>Join our newsletter and get 20% off</h3>
                    <div className='content'>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Excepturi corrupti, odio neque ut molestias
                            facilis aperiam praesentium omnis tempore ex.
                        </p>
                        <form className='contact-form' onSubmit={submitHandler}>
                            <input
                                type='email'
                                className='form-input'
                                placeholder='Enter email'
                                name='email'
                                autoComplete='off'
                            />
                            <button type='submit' className='submit-btn'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};
const Wrapper = styled.section`
    padding: 5rem 0;
    h3 {
        text-transform: none;
    }
    p {
        line-height: 2;
        max-width: 45em;
        color: var(--clr-grey-5);
    }
    .contact-form {
        width: 90vw;
        max-width: 500px;
        display: grid;
        grid-template-columns: 1fr;
    }

    .form-input,
    .submit-btn {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        outline: none;
        border: none;
    }
    .form-input {
        border-right: none;
        color: var(--clr-dark);
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
    }
    .submit-btn {
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
    }
    .form-input::placeholder {
        color: var(--clr-gray);
        text-transform: capitalize;
    }
    .submit-btn {
        background: var(--clr-red);
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        cursor: pointer;
        transition: 0.3s linear;
        color: var(--clr-white);
    }
    .submit-btn:hover {
        background: var(--clr-red-light);
        color: var(--clr-dark);
    }
    @media (min-width: 400px) {
        .contact-form {
            grid-template-columns: 1fr auto;
        }
    }
    @media (min-width: 992px) {
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 8rem;
            margin-top: 2rem;
        }
        p {
            margin-bottom: 0;
        }
    }
    @media (min-width: 1280px) {
        padding: 15rem 0;
    }
`;

export default Contact;
