import { adminServices } from "../service/admin-service.js";

const crearNuevaLinea = (nombre, precio, img, id) => {
    const linea = document.createElement('li');
    linea.classList.add('products__list__name-a');
    const content = `   <div class="product__img">
                                <img src="${img}" alt="" class="product__imgs">
                                <ul class="product__options">
                                    <li class="options__admin"><a href="editar_producto.html?id=${id}"><i class="fa-solid fa-pen"></i></a></li>
                                    <li class="options__admin"><button id="${id}"><i class="fa-solid fa-trash"></i></button></li>
                                </ul>
                            </div>
                            <div class="product__text">
                                <h3 class="product__title">${nombre}</h3>
                                <p class="product__price">${precio}</p>
                                <a href="producto-detalle-admin.html?id=${id}" class="product__button">Ver producto</a>
                            </div>`;

    linea.innerHTML = content;
    const btn = linea.querySelector('button');
    btn.addEventListener('click', () => {
        const id = btn.id;
        adminServices.deleteProduct(id).then(respuesta => {
            console.log(respuesta);
        }).catch((error) => alert("Ocurrió un error"));
    })
    return linea;
};

const allProducts = document.querySelector('[data-list-all-products]');

(async () => {
    try {
        const data = await adminServices.listProducts();
        data.forEach(product => {
            const newLine = crearNuevaLinea(product.nombre, product.precio, product.img, product.id);
            allProducts.appendChild(newLine);
        });
    } catch (error) {
        alert("Ocurrió un error");
    }
})();