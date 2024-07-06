"use server";

// Get all products
export const fetchAllProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=100', {
            method: 'GET',
            cache: 'no-store'
        });
        const data = await response.json();

        return {
            success: true,
            data: data?.products,
            message: "Products fetched successfully!"
        }
    }
    catch(err) {
        console.log(err);
        return {
            success: false,
            message: "Some error occured while fetching products!"
        }
    }
}

// Get a single product
export const fetchProductDetails = async (productId) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`, {
            method: 'GET',
            cache: 'no-store'
        });
        const data = await response.json();

        return {
            success: true,
            data: data,
            message: "Product details fetched successfully!"
        }
    }
    catch(err) {
        console.log(err);
        return {
            success: false,
            message: "Some error occured while fetching products!"
        }
    }
}
