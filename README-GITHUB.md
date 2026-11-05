# Sorpresa de cumpleaños · GitHub Pages

Sitio estático bilingüe (inglés/español) con recuerdos personales y videos.

## Para publicar en GitHub Pages

1. Crea un repositorio nuevo y sube **el contenido de esta carpeta** a la raíz del repositorio.
2. Abre **Settings → Pages → Build and deployment** y selecciona **GitHub Actions** como origen.
3. El workflow de `.github/workflows/pages.yml` publicará la página en cada cambio de la rama `main`.
4. Encontrarás la dirección publicada en **Settings → Pages** al terminar el despliegue.

**Privacidad:** GitHub Pages ofrece un sitio público y las fotografías y videos se podrán ver desde el enlace. `robots.txt` pide a los buscadores no indexarlo, pero **no restringe el acceso**. Usa imágenes personales únicamente si las personas retratadas aceptan esta publicación.

## Personalización

Edita `config.js` para modificar textos, nombre, respuestas de los candados y fotos. Si deseas mantener los clips originales, están en `personal/`; los videos horizontales usados en la galería se encuentran en `video/recuerdo-horizontal-1.mp4` y `video/recuerdo-horizontal-2.mp4`.
