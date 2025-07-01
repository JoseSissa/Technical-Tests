# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```



🎯 Objetivo
Construir una aplicación web sencilla en React que permita explorar los Pokémon de la primera generación (desde el 1 hasta el 151), mostrando su información detallada tanto en una tabla interactiva (1) como en una vista en cuadrícula responsive (2).

📑 ¿Qué se evaluará?
• Consumo de API REST externa

• Manejo de datos en el cliente (fetching, transformación, renderizado)

• Calidad del código (estructura, limpieza, reutilización de componentes)

• Experiencia de usuario (interacciones, presentación, responsividad)

Fuente de datos
• Los datos deben obtenerse exclusivamente desde: 

iconPokeapipokeapi.co/api/v2/pokemon?limit=151

• Esta petición devuelve solo el nombre y URL de cada Pokémon.

• Luego, deberás hacer peticiones adicionales a esas URLs para obtener la información completa en caso de hacer clic en “Ver detalles”, por ejemplo, para ver detalles de Pikachu: 

iconPokeapipokeapi.co/api/v2/pokemon/pikachu

Importante: La API de Pokémon no envía parámetros adicionales para filtrar, ordenar ni paginar.

Toda la manipulación de datos debe hacerse en el cliente al obtener los datos.



⚙ Requisitos técnicos
• Framework obligatorio: React

• Opcional (bonus): TypeScript

• Todo el manejo de datos, ordenamientos, filtros y vistas debe realizarse en el cliente.

• Se espera un código modular, limpio y reutilizable.

Bonus (Plus)
Será un punto a favor si agregas indicadores visuales para las estadísticas del Pokémon:

• Resalta en verde las estadísticas altas.

• Resalta en rojo las estadísticas bajas.

• Puedes usar barras, badges, colores de fondo, iconos u otro recurso visual que mejore la experiencia de usuario.

Esto no es obligatorio, pero será muy valorado si lo implementas de forma clara y elegante.

1️⃣ Vista en tabla
Requisitos de la tabla
Utiliza una librería de tablas (como react-data-table-component, TanStack Table, MUI

DataGrid, etc.) y plasma la siguiente información:

Columnas requeridas


Campo                         Descripción



Imagen                        sprites.front_default (solo se muestra, sin ordenamiento).

Nombre                       Ordenable (ascendente/descendente).

Tipo de Pokémon        Muestra los tipos (types). Ordenable por el primer y segundo  tipo.

Peso (kg)                      Ordenable.

Altura (m)                     Ordenable.

Salud base                   Ordenable.

Experiencia base          Ordenable.

Ataque base                 Ordenable.

Defensa base               Ordenable.

Ataque especial           Ordenable.

Defensa especial          Ordenable.

Velocidad                     Ordenable.

Ver detalles                  Para visualizar en una ventana modal la información del Pokémon.



Filtrado
• Debe poder filtrar por tipo de Pokémon, usando un dropdown o multiselect.

• Por ejemplo: fuego, agua, planta, eléctrico, etc.

Paginación y ordenamiento
• Paginación local (10 o más por página, para un máximo de 50)

• Ordenamiento también debe hacerse localmente, sin modificar la petición a la API.



2️⃣ Vista en cuadrícula (grid)
Implementa una segunda vista para mostrar los Pokémon en formato tarjeta usando CSS Grid.

Requisitos de la cuadrícula
• Debe ser responsive, adaptándose al ancho de pantalla.

• Cada tarjeta debe mostrar:

o Imagen del Pokémon.

o Número de ID en la esquina superior.

o Nombre en la parte inferior.

Interacción
• Al hacer clic en cualquier Pokémon (ya sea desde la tabla o desde la cuadrícula), debe abrirse una ventana modal que muestre sus especificaciones detalladas.

• Información mínima en el modal:

o ID

o Nombre

o Imagen

o Tipo(s)

o Altura

o Peso

o Todas las estadísticas base (atributo stats de cada Pokémon).



🚀 Entrega


1. Sube el código a un repositorio público de GitHub.

2. Despliega tu app en una página gratuita de GitHub Pages, Vercel o similar.  Puedes seguir esta guía: https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site 

3. Asegúrate de que la página esté publicada y accesible públicamente.

4. Incluye en el README:

• Descripción del proyecto

• Captura de pantalla

• Link a la demo en GitHub Pages

• Instrucciones para correr el proyecto localmente

5. Completa el formulario para presentar tu trabajo de prueba técnica (es el mismo que está en la introducción de las instrucciones): 

https://forms.clickup.com/9014628525/f/8cn0m5d-10754/EVGM3DG3J2BTK2QKRC