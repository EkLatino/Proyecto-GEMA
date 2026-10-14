# 📦 GEMA - Gestión de Equipos, Materiales y Almacén

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](#)

**GEMA** es un prototipo / maqueta de interfaz web orientada al control, seguimiento y administración eficiente de préstamos, devoluciones, solicitudes e inventario de herramientas y materiales en almacén.

---

## 🔐 Credenciales de Prueba (Demo)

Para acceder al sistema desde el inicio de sesión (`index.html`), utiliza las siguientes credenciales de demostración:

* **Correo:** `admin@gema.com`
* **Contraseña:** `Gema2026*`

---

## 🚀 Flujo y Funcionalidades del Sistema

El proyecto consta de **7 vistas HTML principales** interconectadas:

1. **`index.html` (Login):** Pantalla de inicio de sesión con validación de acceso demo.
2. **`dashboard.html` (Panel Principal):** Menú interactivo de control con acceso a herramientas, solicitudes, formularios y opción para cerrar sesión.
3. **`herramientas.html` (Catálogo):** Muestra un catálogo visual con **12 herramientas**. Al hacer clic en las fotografías de los equipos, el usuario es redirigido al formulario de préstamos para su alquiler.
4. **`prestamos.html`:** Formulario para la gestión y registro de alquileres/préstamos de herramientas[cite: 8].
5. **`devoluciones.html`:** Formulario para registrar la entrega de equipos previamente prestados[cite: 8].
6. **`solicitudes.html`:** Registro y gestión de solicitudes de material y equipamiento[cite: 8].
7. **`reportes.html`:** Módulo para solicitar herramientas que no estén disponibles en el almacén o requerir materiales adicionales[cite: 8].

---

## 📁 Estructura del Repositorio

```text
GEMA/
├── css/
│   ├── herramientas.css      # Estilos del catálogo de herramientas
│   ├── styleDashboard.css    # Estilos del panel principal
│   ├── styleGeneral.css      # Estilos globales y variables
│   └── styleIndex.css        # Estilos del login
├── imagesProject/            # Fotografías e imágenes del proyecto
├── js/
│   └── index.js              # Lógica de la maqueta y navegación
├── videos/                   # Recursos de video
├── dashboard.html            # Menú principal
├── devoluciones.html         # Formulario de devoluciones
├── herramientas.html         # Catálogo de 12 herramientas
├── index.html                # Login / Inicio
├── prestamos.html            # Formulario de préstamos
├── reportes.html             # Formulario de reportes / faltantes
└── solicitudes.html          # Formulario de solicitudes
