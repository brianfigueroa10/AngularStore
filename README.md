# AngularStore - E-commerce App

AngularStore es una aplicación de e-commerce sencilla que consume la API de [fakestoreapi.com](https://fakestoreapi.com). El proyecto está desarrollado con Angular, Stripe y Tailwind CSS, y tiene como objetivo proporcionar una experiencia de compra en línea funcional y atractiva.

## Características

- **Catálogo de productos:** Muestra una lista de productos disponibles con sus detalles y precios.
- **Carrito de compras:** Permite a los usuarios agregar productos al carrito y gestionar las cantidades.
- **Pago:** Integración con Stripe para simular el proceso de pago.
- **Persistencia de datos:** Utiliza `localStorage` para almacenar el estado del carrito de compras.

## Tecnologías Utilizadas

- **Angular:** Para la estructura y lógica de la aplicación.
- **Stripe:** Para la integración del sistema de pagos.
- **Tailwind CSS:** Para el diseño y estilo de la interfaz de usuario.

## Cómo Ejecutar el Proyecto

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/brianfigueroa10/AngularStore.git
    ```

2. **Instalar las dependencias:**

    ```bash
    cd AngularStore
    npm install
    ```

3. **Iniciar la aplicación:**

    ```bash
    ng serve
    ```

4. **Abrir en tu navegador:** Abre `http://localhost:4200` en tu navegador web favorito.

## Ejemplo de Uso

1. **Explorar el catálogo:** Navega por la lista de productos disponibles y consulta sus detalles.
2. **Agregar al carrito:** Haz clic en el botón "Agregar al carrito" para añadir productos al carrito de compras.
3. **Gestionar el carrito:** Ve al carrito de compras para ajustar las cantidades de los productos seleccionados.
4. **Realizar el pago:** Procede al pago utilizando la integración con Stripe para completar la compra.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. **Fork este repositorio.**
2. **Crea una rama con tu nueva característica (`git checkout -b feature/nueva-caracteristica`).**
3. **Haz commit de tus cambios (`git commit -m 'Agrega nueva característica'`).**
4. **Push a la rama (`git push origin feature/nueva-caracteristica`).**
5. **Abre un Pull Request.**
