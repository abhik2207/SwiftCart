import { auth } from '@/auth'
import { redirect } from 'next/navigation';

export default async function Unauthorised() {
    const getSession = await auth();

    if (getSession?.user) {
        redirect("/");
    }

    return (
        <div className='h-[92vh] w-full bg-zinc-900 flex items-center justify-center p-10'>
            <h1 className='text-xl font-bold text-zinc-200'>You are not logged in</h1>
        </div>
    )
}
