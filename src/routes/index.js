// Importamos template y paginas para el manejo de rutas
import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

// Creamos un objeto y escribimos cuales seran las rutas
const routes = {
  "/": Home,
  // :id es un valor dinamico
  "/:id": Character,
  "/contact": "Contact",
};

// Creamos un manejador el cual se encarga de mostrar los elementos
const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;
