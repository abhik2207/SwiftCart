'use client';

import { Button } from "@/components/ui/button";
import { removeFromCart } from "@/store/slices/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cartItems.reduce((acc, curr) => acc + curr.price - (curr.price * curr.discountPercentage / 100), 0));
    }, [cartItems]);

    if(cartItems.length === 0 || cartItems.length < 0) {
        return (
            <div className="w-full h-[92vh] bg-zinc-900 flex items-center justify-center">
                <p className="text-2xl text-zinc-50 font-semibold">Cart is empty</p>
            </div>
        )
    }

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    }

    return (
        <div className="bg-zinc-900 py-4 min-h-[92vh]">
            <div className="px-32">
                <h2 className="text-3xl font-bold text-zinc-50 mt-12">Cart</h2>
                <div className="overflow-y-auto">
                    <table className="mt-12 w-full border-collapse divide-y">
                        <thead className="whitespace-nowrap text-left">
                            <tr>
                                <th className="text-base text-zinc-500 py-4">Item</th>
                                <th className="text-base text-zinc-500 py-4">Price</th>
                                <th className="text-base text-zinc-500 py-4">Remove</th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap divide-y">
                            {
                                cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td className="py-5 px-0">
                                            <div className="flex items-center gap-6 w-max">
                                                <div className="h-36 shrink-0">
                                                    <img src={item.thumbnail} className="w-full h-full object-contain" alt={item.title} />
                                                </div>
                                                <div>
                                                    <p className="text-zinc-50 text-lg font-semibold">${item.title}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5 px-0">
                                            <p className="text-zinc-50">${(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}</p>
                                        </td>
                                        <td className="py-5 px-0">
                                            <Button variant='secondary' onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="mt-6">
                    <div>
                        <p className="text-2xl font-bold text-zinc-50">Total: <span>${totalAmount.toFixed(2)}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
