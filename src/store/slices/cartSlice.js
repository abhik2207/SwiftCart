import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload);
        },
        removeFromCart(state, action) {
            let copyOfCart = [...state.cartItems];
            copyOfCart = copyOfCart.filter((item) => item.id !== action.payload);
            state.cartItems = copyOfCart;
            
            return state;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
