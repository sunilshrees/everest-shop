import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingIndex >= 0) {
                let newAmount = state.cartItems[existingIndex].cartQuantity + 1;
                if (newAmount > state.cartItems[existingIndex].stock) {
                    newAmount = state.cartItems[existingIndex].stock;
                    state.cartItems[existingIndex] = {
                        ...state.cartItems[existingIndex],
                        cartQuantity: newAmount,
                    };
                } else {
                    state.cartItems[existingIndex] = {
                        ...state.cartItems[existingIndex],
                        cartQuantity: newAmount,
                    };
                }
            } else {
                let tempProductItem = {
                    ...action.payload,
                    cartQuantity: action.payload.amount,
                };
                state.cartItems.push(tempProductItem);
                toast.success('Product added to cart', {
                    position: 'top-right',
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.info('Decreased product quantity', {
                    position: 'top-right',
                });
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );

                state.cartItems = nextCartItems;

                toast.error('Product removed from cart', {
                    position: 'top-right',
                });
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action) {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== cartItem.id
                    );

                    state.cartItems = nextCartItems;

                    toast.error('Product removed from cart', {
                        position: 'top-right',
                    });
                }
                localStorage.setItem(
                    'cartItems',
                    JSON.stringify(state.cartItems)
                );
                return state;
            });
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { nepPrice, cartQuantity } = cartItem;
                    const itemTotal = nepPrice * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
    },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
