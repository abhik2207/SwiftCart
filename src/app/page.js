import { fetchAllProducts } from "@/actions";
import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { redirect } from "next/navigation";

export default async function Home() {
  const allProducts = await fetchAllProducts();

  const getSession = await auth();

  if(!getSession?.user) {
    redirect('/unauth-page');
  }

  return (
    <div className="w-full min-h-screen bg-zinc-900 flex items-center justify-center flex-col">
      {/* <div className="w-full min-h-100vh grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10"> */}
      <div className="w-full min-h-100vh flex flex-wrap justify-center gap-10 p-10">
        {
          allProducts && allProducts.data && allProducts.data.length > 0 ? allProducts.data.map((item, index) => (
            <Product key={index} item={item} />
          )) : null
        }
      </div>
    </div>
  );
}
