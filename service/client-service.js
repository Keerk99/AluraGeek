const listProduct = () => fetch("http://localhost:3000/product").then(respuesta => respuesta.json());

const productDetail = (id) => fetch(`http://localhost:3000/product/${id}`).then(respuesta => respuesta.json());

export const clientServices = {
    listProduct,
    productDetail
};