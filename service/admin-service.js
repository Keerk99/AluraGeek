const listProducts = () => fetch("http://localhost:3000/product").then(respuesta => respuesta.json());

const createProduct = (img, categoria, nombre, precio, description) => {
    return fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ img, categoria, nombre, precio, description, id: uuid.v4() }),
    })
}

const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/product/${id}`, {
        method: "DELETE",
    })
}

const detailProduct = (id) => fetch(`http://localhost:3000/product/${id}`).then(respuesta => respuesta.json());

const updateProduct = (img, categoria, nombre, precio, description, id) => {
    return fetch(`http://localhost:3000/product/${id}`, {
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