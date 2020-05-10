const getHash = () =>
  // Accedemos a un elem. del nav. 'Location'
  // Obtenemos el hash
  // Slide permite elimina el 1er elemento '#'
  // toLocateLowerCase cambiamos a minusculas
  // splite() elimina los "/"
  //  [1] traemos el id del elemento
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";

export default getHash;
