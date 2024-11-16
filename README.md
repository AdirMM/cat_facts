**Gatitos y Hechos Curiosos**

**¿Qué hace el proyecto?**

Este proyecto web dinámico combina la ternura de los gatos con la curiosidad de los hechos. Utiliza JavaScript puro (vanilla JS) como base, pero se enriquece con las potentes bibliotecas de React y Vite para crear una experiencia de usuario interactiva.

**Funcionamiento:**

1. **Obtención de Datos:**
   * **Hechos sobre gatos:** Se realiza una solicitud a la API `https://catfact.ninja/fact` para obtener un hecho aleatorio y divertido sobre los gatos.
   * **Imágenes de gatos:** Utilizando un custom hook, se generan imágenes personalizadas a través de la API `https://cataas.com/`. Esta API permite crear imágenes con texto, y en este caso, se emplearán las primeras tres palabras del hecho obtenido para generar una imagen personalizada de un gato con ese texto.
2. **Interfaz de Usuario:**
   * **React:** La biblioteca de React se utiliza para construir la interfaz de usuario, creando componentes reutilizables y gestionando el estado de la aplicación de manera eficiente.
   * **Vite:** Vite actúa como un potente build tool, acelerando el desarrollo y la compilación de la aplicación.
   * **Visualización:** El hecho sobre gatos y la imagen personalizada se muestran de forma clara y atractiva en la interfaz, creando una experiencia visualmente agradable.

**Tecnologías Utilizadas:**

* **JavaScript (Vanilla JS):** Lenguaje de programación base para la lógica del proyecto.
* **React:** Biblioteca de JavaScript para construir interfaces de usuario.
* **Vite:** Build tool para desarrollo web rápido.
* **APIs:**
    * `https://catfact.ninja/fact`: Para obtener hechos aleatorios sobre gatos.
    * `https://cataas.com/`: Para generar imágenes personalizadas de gatos con texto.
