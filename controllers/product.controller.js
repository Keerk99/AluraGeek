import { adminServices } from "../service/admin-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const img = document.querySelector("[data-img]").value;
    const category = document.querySelector('[data-category]').value;
    const productName = document.querySelector('[data-product-name]').value;
    const price = document.querySelector('[data-product-price]').value;
    const description = document.querySelector('[data-product-description]').value;

    adminServices.createProduct(img, category, productName, price, description).then(() => {
        window.location.href = "../screens/admin.html";
    }).catch((error) => console.log(error));

});