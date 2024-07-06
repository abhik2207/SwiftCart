'use client';

import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { addToCart, removeFromCart } from "@/store/slices/cartSlice";

export default function AddToCartButton({ productItem }) {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const isInCart = cartItems.some(item => item.id === productItem.id);

    const handleAddToCart = () => {
        dispatch(addToCart(productItem));
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(productItem.id));
    }

    return (
        <div className="mt-8 max-w-md">
            <Button variant='secondary' className='font-semibold text-lg py-6' type='button' onClick={isInCart ? handleRemoveFromCart : handleAddToCart}>
                {
                    isInCart ? "Remove from cart" : "Add to cart"
                }
            </Button>
        </div>
    )
}
