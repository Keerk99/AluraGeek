import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (nombre, precio, img, id) => {
    const linea = document.createElement('li');
    linea.classList.add('products__list__name-categoy');
    const content = `   <div class="product__img">
                                <img src="${img}" alt="" class="product__imgs">
                            </div>
                            <div class="product__text">
                                <h3 class="product__title">${nombre}</h3>
                                <p class="product__price">${precio}</p>
                                <a href="producto-detalle.html?id=${id}" class="product__button">Ver producto</a>
                            </div>`;

    linea.innerHTML = content;
    return linea;
};


const listaCategoria = document.querySelector('[data-category]');

(async () => {
    try {
        // Obtener la categoría almacenada en localStorage
        const selectedCategory = localStorage.getItem('selectedCategory');

        // Hacer una solicitud a la API para obtener los productos de la categoría seleccionada
        const data = await clientServices.listProduct();

        // Filtra los productos por la categoría seleccionada
        const productosCategoria = data.filter(producto => producto.categoria == selectedCategory);

        // Crea y agrega elementos de lista a la página
        productosCategoria.forEach(producto => {
            const nuevaLinea = crearNuevaLinea(producto.nombre, producto.precio, producto.img, producto.id);
            listaCategoria.appendChild(nuevaLinea);
        });
    } catch (error) {
        console.log(error);
        alert("Ocurrió un error");
    }
})();