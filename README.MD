# Portafolio Naabit

Portafolio web personal de **Natalia García Cofré**, desarrollado para presentar proyectos de desarrollo web, QA, investigación y herramientas digitales con enfoque social.

El sitio funciona como una carta de presentación profesional: reúne proyectos destacados, perfil técnico, forma de trabajo, investigación publicada, certificaciones, CV y enlaces de contacto en una interfaz estática, responsive y mantenible.

**Sitio web:** https://naabit.cl/

---

## Vista general

El portafolio está construido con **HTML, CSS y JavaScript vanilla**, sin frameworks. Su estructura prioriza la claridad, la navegación por secciones y una estética visual propia asociada a la identidad **Naabit**.

Incluye:

* Navegación lateral reutilizable desde `partials/sidebar.html`.
* Footer reutilizable desde `partials/footer.html`.
* Secciones para inicio, enfoque, proyectos, investigación, CV y contacto.
* Tarjetas de proyectos con enlaces a demo, repositorio, testing y documentación cuando corresponde.
* CV descargable y certificaciones relevantes.
* Diseño responsive para escritorio y móvil.
* Estilos centralizados en `assets/css/style.css`.
* JavaScript para cargar parciales y controlar interacciones de la interfaz.
* Soporte para modo claro y oscuro.
* Recursos visuales, íconos e imágenes optimizados para la web.

---

## Propósito

Este proyecto reúne mi trabajo como desarrolladora en formación con foco en **Python, Django, backend, QA y documentación técnica**.

El portafolio busca mostrar no solo proyectos terminados, sino también la forma en que trabajo:

* Construcción de aplicaciones web con foco en claridad y mantenibilidad.
* Documentación de funcionalidades, decisiones y procesos.
* Pruebas manuales y automatizadas de flujos críticos.
* Despliegue de demos públicas y organización de repositorios.
* Atención a la experiencia de uso, accesibilidad y contexto de las herramientas digitales.

---

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* `fetch()` para cargar parciales HTML
* Responsive Design
* Git y GitHub
* GitHub Pages
* Render, para demos asociadas a proyectos backend
* Dominio personalizado con HTTPS

---

## Estructura del proyecto

```text
portfolio-naabit/
├── index.html
├── proyectos.html
├── contacto.html
├── partials/
│   ├── sidebar.html
│   └── footer.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── includes.js
    │   └── main.js
    ├── img/
    │   ├── bg/
    │   ├── brand/
    │   ├── favicon/
    │   ├── icons/
    │   └── projects/
    └── docs/
        ├── cv/
        
```

---

## Secciones principales

### Inicio

Presentación breve del perfil profesional:

> Desarrolladora Python/Django en formación · Backend, QA y documentación técnica.

La sección introduce el enfoque del portafolio: construir y evaluar herramientas digitales claras, accesibles y útiles en contextos reales.

### Proyectos

Archivo de proyectos destacados, cada uno presentado con descripción, tecnologías utilizadas y accesos a recursos relevantes.

Actualmente incluye proyectos de desarrollo, QA y experimentación web, como:

* **Biblos:** herramienta Django para importar, filtrar, clasificar y exportar artículos bibliográficos desde archivos Excel. Incluye testing automatizado y GitHub Actions.
* **Purple Store:** e-commerce Django con catálogo, carrito, autenticación y checkout; acompañado de un repositorio QA con pruebas manuales, hallazgos y una automatización inicial con Cypress.
* **Treile Café:** prototipo web experimental para una cafetería local, con foco en identidad visual, presencia digital y SEO técnico.

### Enfoque

Resumen del cruce entre desarrollo, QA y sociología. Esta sección presenta la forma de trabajo detrás del portafolio: construir interfaces, probar flujos y comprender los sistemas sociales que rodean a la tecnología.

### Investigación

Sección dedicada a escritura, investigación y pensamiento crítico sobre tecnología.

Actualmente incluye el ensayo **“Meditations on Reciprocity in the Age of AI: From Descartes to Augmented Parasociality”**, seleccionado en el marco del **Berggruen Prize Essay Competition 2025**.

### CV y certificaciones

Espacio para presentar el perfil profesional, descargar una versión actualizada del currículum y consultar certificaciones relacionadas con la formación técnica.

### Contacto

Incluye enlaces a GitHub, LinkedIn y canales de contacto profesional.

---

## Cómo ejecutar el proyecto en local

Como el sitio carga parciales HTML mediante `fetch()`, no se recomienda abrir `index.html` directamente con doble clic. Para visualizarlo correctamente, utiliza un servidor local.

### Opción con Python

Desde la carpeta raíz del proyecto:

```powershell
py -m http.server 5500
```

Luego abre en el navegador:

```text
http://localhost:5500
```

### Opción con VS Code

También puedes usar la extensión **Live Server** y abrir el proyecto desde el editor.

---

## Archivos clave

* `index.html`: estructura y contenido principal del portafolio.
* `proyectos.html`: vista dedicada a proyectos y su documentación asociada.
* `contacto.html`: información de contacto y acceso a CV.
* `partials/sidebar.html`: navegación lateral reutilizable.
* `partials/footer.html`: footer reutilizable.
* `assets/css/style.css`: estilos globales, componentes, modo claro/oscuro y diseño responsive.
* `assets/js/includes.js`: carga dinámica de parciales HTML.
* `assets/js/main.js`: comportamiento interactivo de la interfaz.
* `assets/img/`: imágenes, íconos, fondos y recursos visuales.
* `assets/docs/`: CV descargable y certificaciones.

---

## Personalización rápida

Para actualizar el contenido del portafolio:

* Editar textos principales en `index.html`, `proyectos.html` o `contacto.html`.
* Modificar la navegación en `partials/sidebar.html`.
* Actualizar redes, enlaces o información secundaria en `partials/footer.html`.
* Reemplazar imágenes dentro de `assets/img/`.
* Sustituir o agregar documentos descargables en `assets/docs/`.
* Ajustar colores, espaciados y componentes visuales desde `assets/css/style.css`.

---

## Estado del proyecto

El portafolio se encuentra publicado y en uso como presencia profesional para postulaciones laborales.

La versión actual reúne proyectos desplegados, repositorios públicos, documentación de testing, CV, certificaciones, publicaciones e información de contacto bajo el dominio propio **naabit.cl**.

---

## Próximas mejoras

* Realizar revisiones periódicas de enlaces, demos públicas y documentos descargables.
* Seguir ampliando la documentación de testing en los proyectos.
* Incorporar nuevos proyectos y casos de estudio a medida que evolucionen.
* Mejorar progresivamente accesibilidad, rendimiento y SEO técnico.
* Evaluar métricas de uso o analítica respetuosa de la privacidad cuando el sitio tenga mayor circulación.

---

## Autora

**Natalia García Cofré**
Desarrollo web · QA · documentación técnica · investigación social · archivo digital

* Sitio web: https://naabit.cl/
* GitHub: https://github.com/naabit
* LinkedIn: https://www.linkedin.com/in/natalia-garcia-cofre
