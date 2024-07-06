'use client';

import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <div className="w-full flex justify-between items-center bg-zinc-800 h-[8vh] px-5 lg:px-32">
            <Link href='/'>
                <h1 className="text-2xl font-extrabold text-zinc-50">SwiftCart</h1>
            </Link>

            <div className="flex gap-3 items-center">
                <Link href='/'>
                    <p className="text-zinc-900 bg-zinc-400 p-1 lg:px-3 lg:py-2 rounded-md outline-none border-none font-medium lg:font-semibold text-md lg:text-lg hover:bg-zinc-500">Products</p>
                </Link>
                <Link href='/cart'>
                    <p className="text-zinc-900 bg-zinc-400 p-1 lg:px-3 lg:py-2 rounded-md outline-none border-none font-medium lg:font-semibold text-md lg:text-lg hover:bg-zinc-500">Cart</p>
                </Link>
                <form>
                    <Button className='p-1 lg:px-3 lg:py-6 font-medium lg:font-semibold text-md lg:text-lg hover:bg-zinc-700'>Login</Button>
                </form>
            </div>
        </div>
    )
}
