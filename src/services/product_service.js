export const PRODUCT_API_URL = process.env.NEXT_PUBLIC_PRODUCT_API_URL;

export const productFetcher = (...args) => fetch(...args).then(res => res.json());

export const deleteProduct = (id) => {
    return fetch(PRODUCT_API_URL + '/' + id, {
        method: 'DELETE'
    });
};

export const createProduct = (product) => {
    const newProductData = {
        "id": Date.now(),
        "title": product.title,
        "price": product.price,
        "description": "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
        "images": [
            "https://i.imgur.com/0qQBkxX.jpg",
            "https://i.imgur.com/I5g1DoE.jpg",
            "https://i.imgur.com/myfFQBW.jpg"
        ],
        "creationAt": "2025-11-15T07:17:31.000Z",
        "updatedAt": "2025-11-15T07:17:31.000Z"
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
        "id": product.id,
        "title": product.title,
        "price": product.price,
        "description": "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
        "images": [
            "https://i.imgur.com/0qQBkxX.jpg",
            "https://i.imgur.com/I5g1DoE.jpg",
            "https://i.imgur.com/myfFQBW.jpg"
        ],
        "creationAt": "2025-11-15T07:17:31.000Z",
        "updatedAt": "2025-11-15T07:17:31.000Z"
    };
    return fetch(PRODUCT_API_URL + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProductData)
    });
};