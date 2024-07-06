import { fetchProductDetails } from "@/actions";
import { auth } from "@/auth";
import AddToCartButton from "@/components/AddToCartButton";
import { redirect } from "next/navigation";

export default async function ProductDetails({ params }) {
    const productDetails = await fetchProductDetails(params.details);
    const product = productDetails.data;
    const discountedPrice = product.price - (product.price * product.discountPercentage / 100);

    const getSession = await auth();

    if (!getSession?.user) {
        redirect('/unauth-page');
    }

    return (
        <div className="w-full flex flex-col h-[92vh]">
            <div className="flex flex-1 px-32 bg-zinc-900">
                <div className="flex flex-col justify-center p-4 h-full w-[40%]">
                    <div className="bg-zinc-800 rounded-xl">
                        <div className="w-full">
                            <img src={product.thumbnail} className="h-full w-full object-cover" alt={product.title} />
                        </div>
                        <div className="flex justify-center items-center gap-2 border-t-2 border-zinc-700 py-4">
                            {
                                product.images.map((image, index) => (
                                    <img className={index !== product.images.length - 1 ? 'h-24 p-1 border-r-2 border-zinc-700' : 'h-20 p-1'} src={image} key={index} alt={product.title} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full w-[60%] py-20 pl-4">
                    <h1 className="text-zinc-50 font-bold text-4xl">{product.title}</h1>
                    <h2 className="text-zinc-300 font-bold text-2xl mt-2">{product.brand || "Abhik's brand"}</h2>

                    <div className="flex gap-5 mt-5">
                        <h1 className="font-semibold text-zinc-500 line-through text-xl">${product.price}</h1>
                        <h1 className="font-semibold text-zinc-50 text-xl">${discountedPrice.toFixed(2)}</h1>
                    </div>

                    <div className="flex justify-between mt-5">
                        <h3 className="text-zinc-100 font-medium text-xl my-5">{product.rating} ⭐</h3>
                        <p className="text-zinc-300 font-medium text-md mt-5">{product.stock} left in stock</p>
                    </div>

                    <p className="text-zinc-300 font-medium text-md text-justify">{product.description}</p>

                    <AddToCartButton productItem={product} />
                </div>
            </div>
        </div>
    )
}
