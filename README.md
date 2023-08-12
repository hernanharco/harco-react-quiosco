
npm run dev

proyecto creadocon laravel en backend  y react en frontend
Instalando Docker
	docker.com
		cambios en el sistema
		las dos opciones se dejan seleccionadas
		se da ok
		reiniciamos la compu
	
	Para poder seguir con al manual tenia un problema con el wls porque no encontraba como instalarlo pero cuando cree un proyecto
	y lo abri con visual este automaticamente me instalo  WSL y comenzo hacer configuraciones
	@exe:"wsl" -> para buscarlo en visual studio code
	de esta forma se crea proyectos. ->
		composer create-project laravel/laravel example-app
	lo primero que se debe hacer es apuntar a una base de datos y para esto se creo una base de datos en tableplus
	e hicimos los cambios en las variables de  entorno .env en la parte de 
		DB_DATABASE=devstagram
	
	formas de arrancar nuestro programa
	con docket -> sail up
		normal -> php artisan serve
	para mirar si tenemos conexión a la BD
		php artisan migrate 
		php artisan migrate:rollback -> para eliminar las tablas
2. Creando React
	npm create vite@latest
3. adicionamos react al proyecto 
	le  damos file - add folder to Workspace...
4. Instalamos tailwind
	terminal react-quiosco -> npm install -D tailwindcss postcss autoprefixer
	npx tailwindcss init -p (esto crea postcss.config.cjs & tailwind.config.cjs)
	4.1 trabajamos en tailwind.config.js
5. Borramos el react.svg que esta en 
6. Limpiamos el index.css - dependencia Tailwind CSS intelligent
	6.1 y escribimos 
		@tailwind base;
		@tailwind components;
		@tailwind utilities;
7. Trabajamos en el App.jsx
8. Instalamos 
npm i react-router-dom
    8.1 creamos un archivo router.jsx a nivel de src
9. Creamos una carpeta con nombre layouts
    9.1 Layout.jsx -> este va a tener el acceso a la aplicación
        tener importado 
            import { Outlet } from "react-router-dom"
    9.2 AuthLayout.jsx -> este un formulario para que coloque las credenciales
10. Cambiar donde se debe cargar el component borramos el de app
        Colocamos -> <RouterProvider router={ router } />
        recordar import 
            { RouterProvider } from  'react-router-dom'
            router from './router' -> este la clase de router jsx que creamos en el punto 8
11. Creamos la carpeta de views a nivel de src
    11.1 Inicio.jsx ->
    11.2 Login.jsx ->
    11.3 Registro.jsx
(dependencias simple react snippets & ES7 (esta es para que funcione rfce,rafce,rfc para crear componentes) , react / redux / react-Native snippets
react-Native/react/redux snippets for es6/es7)

** para tener el import que se haga automatico
    File - Preferences - Settings 
        se escribe en el buscador auto impor
        y tener seleccionada JavaScript > Suggest: Auto Imports**
12. Comenzamos a trabajar en AuthLayout.jsx
    se copia o se hace la imagenesen la carpeta de public
    12.1 Trabajamos en Registro
    12.2 Trabajamos en Login
    13.3  Creando enlaces para poder moverse entre Registro y Login
        13.3.a vamos a Login y creamos un nav
        (para que no recargue la pagina) -> debemos utilizar el componente llamado
        import { Link } from "react-router-dom"

13. Trabajamos en Layout.jsx
	13.1 Creamos la carpeta components
		Resumen.jsx - rfc
		Sidebar - rfc

***		formas de importacones primero dependencias o hook
		despues componentes y despues funciones y por ultimos estilos ***

	13.2 Vamos a Layout.jsx e importamos los componentes y tambien outlet
	13.3 Creamos la carpeta de data
		categorias.js y se toma la información del siguiente gif
		https://gist.githubusercontent.com/codigoconjuan/14521378ef92f0a99e7a4da70f7aac2f/raw/1a99ec671f6f03d551fd9ce5a3c35fa99c91659d/categorias.js

		{categorias.map()} -> genera un nuevo arreglo no solo recorrerlo

		explicación del porque se debe utilizar el parentesis y no la llaves en el arrow se puede buscar en notas de laravel
	13.4 Que son los propts explicación en el video 272 en laravel o buscar ¿Que son los props en React?
		En components creamos Categoria.jsx
		
		*** los propts -> significado corto de propiedades o property y son ARGUMENTO que se pasan entre componentes de react ***

		agregar extensiones a chrome y buscamos react develop tools

	13.5 Trabajamos en Categoria.jsx
		gap-4
		border -> en todas la  direciones
		w-full -> para que tome todo el ancho disponible
		p-3 un poco de espacio
	13.6 Creamos productos.jsx en data
	 se toma de https://gist.github.com/codigoconjuan/d8391aba7c4d4b948e7a699dd3049238
	13.7 Trabajamos en Inicio.jsx en views
		gap-4 -> separación que va a ver entre ellos
		grid-cols -> es para decir cuantas columnas va tener y se coloca en los mediaqueries

		Creamos Producto.jsx en components
	14.8 Agregando el signo de peso es una función de javascrip *** video 276
		creamos la carpeta helpers en src
			archivo. index.js
		volvemos a Producto.jsx

		Solucionando que al darle scroll no se pierda la información de los lados
			solucionar que no se pierda la información de los lados

15. *** Creamos la carpeta de context a nivel de src ***
	15.1 Creamos el archivo QuioscoProvider.jsx - Trabajamos en este archivo
	15.2 Vamos al main en src
	15.3 Creamos la carpeta de hooks
		15.3.1 Creamos el archivo useQuiosco.js
	15.4 Como se utiliza para eso volvemos al Inicio (como utilizar el Context)

	15.5 Comenzamos a trabajar en QuioscoProvider.jsx ya creando el useState
		15.5.1 vamos al Sidebar.jsx en components
	15.6 Creando la parte del filtro que aparezca la información apartir de  cada categoria
		15.6.1 en QuioscoProvider trabajamos con el useState de categoriaActual
		15.6.2 vamos a Inicio.jsx en viewsy scamos categoriaActual
		15.6.3 creamos la funcion handlerClickCategoria en QuiosocoProvider
		15.6.4 vamos a Categoria en components para consumir la funcion
		15.6.5 resaltar la categoria Actual vamos a Categoria.jsx en components
			const resaltarCategoriaActual = () => categoriaActual.id === id ? "bg-amber-400" : 'bg-white'
		15.6.6 mostrando los productos segun la categoria
			en inicio -> 
			const productos = data.filter(producto => producto.categoria_id === categoriaActual.id) - esto es javascrip

16. Cuando se presione el boton de Agregar que se encuentra en cada imagen para eso vamos a incorporar modal 
	16.1 QuioscoProvider.jsx -> creamos el useState de modal y la funcion de handleClickModal
	vamos a Layout.jsx
	vamos a Producto.jsx
	16.2 instalamos *** npm i react-modal ***
	vamos a Layout e importamos el ReactModal
	y en la parte de abajo vamos a colocarel css dejado en la siguiente pagina
	https://gist.github.com/codigoconjuan/11c6dc91066e93879723144087b410e8
	16.3 Trabajamos en el Modal
	- antes de continuar debemos de quitar un error entrando en Layout.jsx
		ReactModal.setAppElement('#root');
	-Vamos a QuioscoProvider.jsx y creamos useState producto y creamos la funcion handleSetProducto
	- Pasamos Producto,jsx
	- Creamos components ModalProducto.jsx y vamos a Layout.jsx y utilizamos ese componente
	- Trabajamos en ModalProducto.jsx
	- vamos a utilizar un icono desde heroicons.com (utilizados minus, close, plus)

17. Vamos a Resumen.jsx en components y trabajamos en esta clase
	- Creamos en QuioscoProvider el useState pedido
	- Volvemosa Resumen.jsx y trabajamos con pedido
	- Creamos una función handleAgregarPedido en QuioscoProvider y lo agregamos en ModalProducto.jsx
	para eliminar datos que no necesitamos entonces debemos hacer lo siguiente
		{categoria_id, imagen,
	-Resumen.jsx creamos un componente ResumenProducto.jsx
	- ResumenProducto.jsx copiamos la información que esta en este gif
	https://gist.github.com/codigoconjuan/9b251af6caf359ac62fc87b322a5d83d

18. Modificando la cantidades
	- A ModalProducto.jsx - agregamos useState y useEffect y creamos el useEffect y siempre va a tener un collback 
	some -> 
	filter

	Para no repetir los Productos que ya se encuentran en el carrito debemos de cambiar la funcón handleAgregarPedido

19. Agregando Notificaciones
	instalamos *** npm i react-toastify *** se debe configurar en dos partes
		1. en que parte quiere que se muestre 
		2. el evento cuando se quiere mostrar
	- Vamos al Layout y los importamos para que se muestre
	- Lo vamos a utilizar en QuioscoProvider e importamos y lo utilizamos en el metodo
	de handleAgregarPedido
	- Pero no aparece la notificacion eso pasa porque se debe importar los estilos
	import 'react-toastify/dist/ReactToastify.css'
	*** paginas de toast -> https://www.npmjs.com/package/react-toastify ***

--Trabajando en Resumen Producto del Layout
20. Editando objeto del carrito
	Creamos una funcion en QuioscoProvider
		handleEditarCantidad
	- Vamos abrir ResumenProducto.jsx

21. Eliminar un objeto del carrito
	Creamos la funcion en QuioscoProvider
		handleEliminarProductoPedido
	- Se la pasamos a ResumenProducto.jsx

	*** https://doesitmutate.xyz/ *** -> para saber que mutua nuestro arreglo original

22. Calcular el Total
	Creamos un state total en QuioscoProvider 
		const [total, setTotal] = useState([0])
	- Vamos a Resumen
	- Creamos useEffect en QuioscoProvider cada vez que cambie pedido. utilizamos reduce y toma dos parametro 
23. Habilitar y desabilitar boton
	Vamos a Resumen.jsx
	y creamos un arrowfunction comprobarPedido
	- con disabled -> lo habilitamos o desactivamos


	*** AHORA VAMOS AL BACKEND - LARAVEL ***


