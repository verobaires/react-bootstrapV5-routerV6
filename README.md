# MENU BOOTSTRAP REACT CON VITE

##VISTA DESKTOP
![image](https://github.com/verobaires/react-bootstrapV5-routerV6/assets/34665102/94b6527e-4be3-4978-aeed-c8f4bc55e30a)

##VISTA MOBILE
![image](https://github.com/verobaires/react-bootstrapV5-routerV6/assets/34665102/5bab8de2-2510-4836-be4f-27dc48759805)



INSTALACION VITE
$ npm create vite@latest [nombre del proyecto]

(si no se coloca el nombre del proyecto lo va a preguntar y se puede colocar un punto para que tome la carpeta en la cual esta)
![image](https://github.com/verobaires/react-bootstrapV5-routerV6/assets/34665102/4efb288b-7bdb-4421-836b-ed119d59c6f9)

Dejar el nombre del package name como viene por default
![image](https://github.com/verobaires/react-bootstrapV5-routerV6/assets/34665102/a77d9f65-9563-4663-80aa-3cba783bbb1f)


![image](https://github.com/verobaires/react-bootstrapV5-routerV6/assets/34665102/69024398-3561-4b48-a60b-104e64cd837f)

![image](https://github.com/verobaires/react-bootstrapV5-routerV6/assets/34665102/67cba046-603e-4e49-9707-c0ce84e13a5a)


cd [nombre del proyecto]

npm install
npm run dev

INSTALACION BOOSTRAP 
npm install react-bootstrap bootstrap

En index.js o en App.js debe ir -->
import 'bootstrap/dist/css/bootstrap.min.css';

INSTALACION ROUTER 
npm i react-router-dom

![image](https://github.com/verobaires/react-bootstrapV5-routerV6/assets/34665102/e1f38974-a49c-4e72-80ec-bbc785bbcda2)


OUTLET
Outlet nos permite establecer un slot o espacio vacío dentro de un componente, donde podemos renderizar el resultado de una ruta. Esto es muy útil cuando tenemos un layout compartido por varias rutas, pero que tiene una sección que cambia.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
