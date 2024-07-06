"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Product({ item }) {
    const discountedPrice = item.price - (item.price * item.discountPercentage / 100);

    const router = useRouter();

    return (
        <Card className='w-96 shadow-xl flex flex-col'>
            <CardHeader>
                <div className="w-full">
                    <img src={item.thumbnail} className="h-full w-full object-cover" alt={item.title} />
                </div>
                <CardTitle className='text-3xl font-bold tracking-tight'>
                    {item.title}
                </CardTitle>
            </CardHeader>
            <CardContent className='flex-1'>
                <div className="flex gap-5">
                    <h1 className="font-semibold text-zinc-500 line-through text-xl">${item.price}</h1>
                    <h1 className="font-semibold text-black text-xl">${discountedPrice.toFixed(2)}</h1>
                </div>
            </CardContent>
            <CardFooter className='flex justify-between items-center'>
                <Button onClick={() => router.push(`/${item.id}`)}>Details</Button>
            </CardFooter>
        </Card>
    )
}

