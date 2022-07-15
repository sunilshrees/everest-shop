import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cartSlice';
import styled from 'styled-components';

const CheckoutForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validate = Yup.object({
        name: Yup.string().required('Full name is Required'),
        billingAddress: Yup.string().required('Billing address is Required'),
        deliveryAddress: Yup.string().required('Delivery address is Required'),
        phoneNumber: Yup.number().required('Phone number is Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is Required'),
        date: Yup.date()
            .required('Date is Required')
            .min(new Date(), 'Date cannot be in the past'),
    });

    const submitHandler = (values) => {
        toast.info('Order Placed! Redirecting to product page', {
            position: 'top-right',
        });
        setTimeout(() => {
            navigate('/products');
        }, 6000);

        dispatch(clearCart());
    };

    return (
        <>
            <Wrapper>
                <h4>Shipping Form</h4>

                <div>
                    <Formik
                        initialValues={{
                            name: '',
                            billingAddress: '',
                            deliveryAddress: '',
                            email: '',
                            phoneNumber: '',
                            date: '',
                        }}
                        validationSchema={validate}
                        onSubmit={(values) => {
                            submitHandler(values);
                        }}>
                        {(formik) => (
                            <div>
                                <Form className='register'>
                                    <TextField
                                        label='Name'
                                        placeholder='Full Name'
                                        name='name'
                                        type='text'
                                    />
                                    <TextField
                                        label='Billing Address'
                                        placeholder='Billing Address'
                                        name='billingAddress'
                                        type='text'
                                    />
                                    <TextField
                                        label='Delivery Address'
                                        placeholder='Delivery Address'
                                        name='deliveryAddress'
                                        type='text'
                                    />
                                    <TextField
                                        label='Email'
                                        placeholder='Email'
                                        name='email'
                                        type='email'
                                    />
                                    <TextField
                                        label='Phone Number'
                                        placeholder='Phone Number'
                                        name='phoneNumber'
                                        type='number'
                                    />
                                    <TextField
                                        label='Date'
                                        placeholder='Date'
                                        name='date'
                                        type='date'
                                    />

                                    <div className='btnDiv'>
                                        <button
                                            type='submit'
                                            className='btn submit'>
                                            Submit
                                        </button>
                                        <button
                                            type='reset'
                                            className='btn reset'>
                                            Reset
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4 {
        margin-top: 50px;
    }

    .register {
        width: 500px;
        padding: 30px 10px;
        margin-bottom: 50px;
    }
    .btnDiv {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 30px;

        .reset {
            margin-left: 30px;
        }
    }
`;
export default CheckoutForm;
