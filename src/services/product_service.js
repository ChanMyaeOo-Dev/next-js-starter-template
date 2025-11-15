export const PRODUCT_API_URL = process.env.VITE_PRODUCT_API_URL;

export const productFetcher = (...args) => fetch(...args).then(res => res.json());

export const deleteProduct = (id) => {
    return fetch(PRODUCT_API_URL + '/' + id, {
        method: 'DELETE'
    });
};

export const createProduct = (product) => {
    const newProductData = {
        "title": product.title,
        "price": product.price,
        "description": product.description,
    };
    return fetch(PRODUCT_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProductData)
    });
};

export const updateProduct = (id, product) => {
    const newProductData = {
        "title": product.title,
        "price": product.price,
        "description": product.description,
    };
    return fetch(PRODUCT_API_URL + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProductData)
    });
};