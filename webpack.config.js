// Traemos 'path' que ya es de Node y nos sirve para saber en que carpeta estamos
const path = require("path");
// Archivo necesario para trabajar en HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

// Generamos y exportamos el modulo
module.exports = {
  // Punto de entrada y donde vive nuestro codigo inicial
  entry: "./src/index.js",
  // Donde estara el archivo compilado para mandar a prod.
  output: {
    // .resolve => para saber donde se encuentra
    // __dirname => es en la carpeta donde estas crea otra carpeta llamada 'dist'
    path: path.resolve(__dirname, "dist"),
    // Como se llamara el archivo que se crea
    filename: "main.js",
  },
  // Manejo de extensiones
  resolve: {
    // Solo manejo de js
    extensions: [".js"],
  },
  // Creamos las reglas a traves de este modulo
  module: {
    rules: [
      {
        // Establecemos valores par filtrar
        test: /\.js?$/,
        // Para no incorporar archivos .js en mi proyecto
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // Este plugin nos permite trabajar con archivos HTML
  plugins: [
    new HtmlWebpackPlugin({
      // Como en un HTML injectamos un valor
      inject: true,
      // Donde se encuetra en template principal
      template: "./public/index.html",
      // Donde lo guardaremos
      filename: "./index.html",
    }),
    new copyWebpackPlugin([
      {
        from: "./src/styles/styles.css",
      },
    ]),
  ],
};
