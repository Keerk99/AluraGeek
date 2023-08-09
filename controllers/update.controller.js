import { adminServices } from "../service/admin-service.js";

const formEdited = document.querySelector("[data-form-edited]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null) {
        alert("ocurrio un error, serás redirigido a la página principal");
        window.location.href = "admin.html";
    }

    const img = document.querySelector("[data-img]");
    const category = document.querySelector('[data-category]');
    const productName = document.querySelector('[data-product-name]');
    const price = document.querySelector('[data-product-price]');
    const description = document.querySelector('[data-product-description]');

    try {
        const product = await adminServices.detailProduct(id);
        if (product.img && product.categoria && product.nombre && product.precio && product.description) {
            img.value = product.img;
            category.value = product.categoria;
            productName.value = product.nombre;
            price.value = product.precio;
            description.value = product.description;
        } else {
            throw new Error();
        }
    } catch (error) {
        alert("Ocurrió un error");
        window.location.href = "admin.html";
    }
};

obtenerInformacion();

formEdited.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const img = document.querySelector("[data-img]").value;
    const category = document.querySelector('[data-category]').value;
    const productName = document.querySelector('[data-product-name]').value;
    const price = document.querySelector('[data-product-price]').value;
    const description = document.querySelector('[data-product-description]').value;

    adminServices.updateProduct(img, category, productName, price, description, id).then(() => {
        window.location.href = "admin.html";
    })
});