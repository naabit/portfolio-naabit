# Portafolio Naabit

Portafolio web personal de **Natalia García Cofré**, desarrollado para presentar proyectos de desarrollo web, QA, investigación y herramientas digitales con enfoque social.

El sitio funciona como una carta de presentación profesional: reúne proyectos destacados, perfil técnico, mirada de trabajo, investigación publicada, CV y enlaces de contacto en una interfaz estática, responsive y mantenible.

## Vista general

El portafolio está construido con **HTML, CSS y JavaScript vanilla**, sin frameworks. Su estructura prioriza la claridad, la navegación por secciones y una estética visual propia asociada a la identidad **Naabit**.

Incluye:

* navegación lateral reutilizable desde `partials/sidebar.html`
* footer reutilizable desde `partials/footer.html`
* secciones internas para inicio, proyectos, enfoque, investigación, CV y contacto
* tarjetas de proyectos con enlaces a demo, repositorio y testing
* diseño responsive para escritorio y móvil
* estilos centralizados en `assets/css/style.css`
* JavaScript para incluir parciales y controlar interacciones de la interfaz

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* `fetch()` para cargar parciales HTML
* Responsive Design
* Git y GitHub
* GitHub Pages / Render para despliegues asociados a proyectos

## Estructura del proyecto

```text
portfolio-naabit/
├── index.html
├── contacto.html
├── proyectos.html
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
    │   ├── favicon/
    │   ├── icons/
    │   └── projects/
    └── docs/
```

## Secciones principales

### Inicio

Presentación breve del perfil, con énfasis en tecnología cercana, desarrollo web, QA y herramientas digitales pensadas para problemas reales.

### Proyectos

Archivo de proyectos destacados, cada uno presentado con descripción, tecnologías utilizadas y accesos a recursos relevantes.


### Enfoque

Resumen del cruce entre desarrollo, QA y sociología. Esta sección presenta la forma de trabajo detrás del portafolio: construir interfaces, probar flujos y comprender los sistemas sociales que rodean la tecnología.

### Investigación

Sección dedicada a escritura, investigación y pensamiento crítico sobre tecnología. Actualmente incluye el ensayo **“Meditations on Reciprocity in the Age of AI”**, seleccionado en el **Berggruen Prize Essay Competition 2025**.

### CV

Espacio para presentar el perfil profesional y enlazar una versión descargable del currículum.

### Contacto

Incluye correo y enlaces a perfiles profesionales como GitHub y LinkedIn.

## Cómo ejecutar el proyecto en local

Como el sitio carga parciales HTML mediante `fetch()`, no se recomienda abrir `index.html` directamente con doble clic. Para visualizarlo correctamente, usa un servidor local.

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

## Archivos clave

* `index.html`: estructura principal del portafolio.
* `partials/sidebar.html`: navegación lateral reutilizable.
* `partials/footer.html`: footer reutilizable.
* `assets/css/style.css`: estilos globales, diseño responsive, paleta visual y componentes.
* `assets/js/includes.js`: carga dinámica de parciales HTML.
* `assets/js/main.js`: comportamiento interactivo de la interfaz.
* `assets/img/`: imágenes, íconos, fondos y recursos visuales.
* `assets/docs/`: documentos descargables, como CV o certificaciones.

## Personalización rápida

Para actualizar el contenido del portafolio:

* Editar textos principales en `index.html`.
* Modificar la navegación en `partials/sidebar.html`.
* Actualizar redes o información secundaria en `partials/footer.html`.
* Reemplazar imágenes dentro de `assets/img/`.
* Sustituir o agregar documentos descargables en `assets/docs/`.
* Ajustar colores, espaciados y componentes visuales desde `assets/css/style.css`.

## Estado del proyecto

El portafolio se encuentra en desarrollo activo. La versión actual está enfocada en consolidar una presencia profesional clara para postulaciones, presentación de proyectos, documentación de procesos y futuras mejoras de QA.

## Próximas mejoras

* Incorporar CV descargable actualizado.
* Agregar certificaciones relevantes.
* Reemplazar el enlace genérico de Trello por el tablero público del proyecto.
* Mejorar documentación de testing por proyecto.
* Optimizar imágenes y recursos visuales.
* Revisar accesibilidad, rendimiento y SEO técnico.
* Completar páginas secundarias de proyectos y contacto.

## Autora

**Natalia García Cofré**
Desarrollo web · QA · investigación social · archivo digital

* GitHub: `@naabit`
* LinkedIn: `natalia-garcia-cofre`
