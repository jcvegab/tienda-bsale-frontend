# Tienda Online - Bsale | Frontend

## Documentación

### Desarrollo
El proyecto fue realizado con Javascript nativo con sintáxis de ECMA Script6 en estructura de una Single Page Aplication (SPA).
Se segmentó en Services y Components, donde los Service incluían la configuración estándar para la realización de los fetch al
backend API del proyecto y los services específicos para la recolección de la data de cada modelo del proyecto (Categorías y 
Productos). En la sección de componentes se tiene a la clase Home donde se encuentra la raíz de ejecución del SPA y los modelos
anteriormente mencionados con su respectivos diseños y funcionalidades.
Se hizo uso de patrones de diseño como Singleton en la ejecución del Home y Factory en la creación de instancias de los productos 
obtenidos de la API.

### Tecnologías usadas
* HTML
* JavaScript
* Tailwind CSS (Framework CSS)

### Estructura de ficheros
En la carpeta raiz se encuentran los ficheros de dependencias e información del proyecto (package.json) además de los ficheros de configuración de Tailwind y compilación de CSS.
Dentro de la carpeta src se encuentran los archivos a ejecutarse en el cliente.
En la carpeta scripts se encuentran los archivos de Javascript a ejecutarse para iniciar el SPA (home, products y categories), así mismo esta contiene la carpeta services, donde se realiza la estandarización de las peticiones a la API segmentado por cada modelo presente en el proyecto. 

<img alt="Estructura de ficheros" src="https://i.ibb.co/jkCwT1w/Sin-t-tulo.png">

### Layout del proyecto
Se realizó un diseño simple en  la plataforma Figma.
- Puedes ver el layout aquí: https://www.figma.com/file/H2PhkdbYbNpLEQGP3pDOeS/Tienda-Online-Bsale

### Despligue del proyecto:
Puedes revisar el proyecto aquí: https://tienda-bsale-frontend-jcvb0206.vercel.app/

<img alt="Pantalla de inicio del frontend" src="https://i.ibb.co/C6K4Wck/frontend.png" heigth="180" align="center" />


** Puedes ver el repositorio del backend del proyecto aquí: https://github.com/jcvegab/tienda-bsale-backend
