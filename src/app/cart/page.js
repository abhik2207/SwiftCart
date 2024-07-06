import { auth } from "@/auth";
import Cart from "@/components/Cart";
import { redirect } from "next/navigation";

export default async function CartPage() {
    const getSession = await auth();

    if (!getSession?.user) {
        redirect('/unauth-page');
    }

    return (
        <Cart />
    )
}
