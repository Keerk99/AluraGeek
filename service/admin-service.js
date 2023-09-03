
const listProducts = () => fetch("https://64d425ac67b2662bf3dd0029.mockapi.io/product").then(respuesta => respuesta.json());

const createProduct = (img, categoria, nombre, precio, description) => {
    return fetch("https://64d425ac67b2662bf3dd0029.mockapi.io/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ img, categoria, nombre, precio, description, id: uuid.v4() }),
    })
}

const deleteProduct = (id) => {
    return fetch(`https://64d425ac67b2662bf3dd0029.mockapi.io/product/${id}`, {
        method: "DELETE",
    })
}

const detailProduct = (id) => fetch(`https://64d425ac67b2662bf3dd0029.mockapi.io/product/${id}`).then(respuesta => respuesta.json());

const updateProduct = (img, categoria, nombre, precio, description, id) => {
    return fetch(`https://64d425ac67b2662bf3dd0029.mockapi.io/product/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ img, categoria, nombre, precio, description })
    }).then(respuesta => console.log(respuesta)).catch((error) => (console.log(error)));
}

export const adminServices = {
    listProducts,
    createProduct,
    deleteProduct,
    detailProduct,
    updateProduct,
};