import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styled from 'styled-components';

export const TextField = (props) => {
    const [field, meta] = useField(props);
    return (
        <Wrapper>
            <label htmlFor={field.name}>{props.label}</label>
            <input
                className={`username ${
                    meta.touched && meta.error && 'is-invalid'
                }`}
                {...field}
                {...props}
                autoComplete='off'
            />

            <ErrorMessage component='div' name={field.name} className='error' />
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 30px;

    input,
    label {
        font-size: 1.1rem;
        padding: 0.5rem;
    }
    input {
        outline: none;
        border: none;
        background: var(--clr-gray);
        padding: 1rem;
    }
`;
