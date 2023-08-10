const listProduct = () => fetch("https://64d425ac67b2662bf3dd0029.mockapi.io/product").then(respuesta => respuesta.json());

const productDetail = (id) => fetch(`https://64d425ac67b2662bf3dd0029.mockapi.io/product/${id}`).then(respuesta => respuesta.json());

export const clientServices = {
    listProduct,
    productDetail
};