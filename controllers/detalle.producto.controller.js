import { clientServices } from "../service/client-service.js";

const obtenerInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    console.log(id);

    const img = document.querySelector("[data-img-detail]");
    const title = document.querySelector("[data-title-detail]");
    const price = document.querySelector("[data-price-detail]");
    const text = document.querySelector("[data-text-detail]");

    try {
        const product = await clientServices.productDetail(id);
        if (product.img && product.nombre && product.precio && product.description) {
            img.src = product.img;
            title.textContent = product.nombre;
            price.textContent = product.precio;
            text.textContent = product.description;
        } else {
            throw new Error();
        }
    } catch (error) {
        alert("Ocurrió un error");
        window.location.href = "index.html";
    }
};

obtenerInfo();