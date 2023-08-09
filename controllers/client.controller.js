import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (nombre, precio, img, id) => {
    const linea = document.createElement('li');
    linea.classList.add('products__list__name');
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

const lista1 = document.querySelector('[data-list1]');
const lista2 = document.querySelector('[data-list2]');
const lista3 = document.querySelector('[data-list3]');

(async () => {
    try {
        const data = await clientServices.listProduct();
        data.forEach(product => {
            if (product.categoria == "Star Wars") {
                const newLine = crearNuevaLinea(product.nombre, product.precio, product.img, product.id);
                //Con el insertAdjacentElement('afterbegin') agregamos los articulos e invertimos el orden (es como el appenchild)
                lista1.insertAdjacentElement('afterbegin', newLine);
            } else if (product.categoria == "Consolas") {
                const newLine = crearNuevaLinea(product.nombre, product.precio, product.img, product.id);
                lista2.insertAdjacentElement('afterbegin', newLine);
            } else if (product.categoria == "Diversos") {
                const newLine = crearNuevaLinea(product.nombre, product.precio, product.img, product.id);
                lista3.insertAdjacentElement('afterbegin', newLine);
            }
        });

        // Obtener todos los enlaces "Ver Todo" en cada sección
        const verTodoLinks = document.querySelectorAll('.products__all');

        // Agrega el evento click a cada enlace "Ver Todo"
        verTodoLinks.forEach(verTodoLink => {
            verTodoLink.addEventListener('click', (event) => {
                event.preventDefault(); // Evitar que el enlace redirija inmediatamente
                const categoria = verTodoLink.getAttribute('data-category');
                localStorage.setItem('selectedCategory', categoria);
                window.location.href = 'ver-todo.html';
            });
        });
    } catch (error) {
        alert("Ocurrió un error");
    }
})();