const fs = require("fs");
var cors = require("cors");

const express = require("express"),
  path = require("path"),
  app = express(),
  puerto = 3000;

app.use(cors());



app.get("/", (peticion, respuesta) => {
  // Podemos acceder a la petición HTTP
  let agenteDeUsuario = peticion.header("user-agent");
  respuesta.send("La ruta / solicitada con: " + agenteDeUsuario);
});
app.get("/pagina", (peticion, respuesta) => {
  // Servir archivo HTML, o cualquier otro archivo
  let rutaDeArchivo = path.join(__dirname, "plantilla.html");
  respuesta.sendFile(rutaDeArchivo);
});

app.get("/users/getAll", (peticion, respuesta) => {
    // Ruta al archivo JSON que quieres leer
const rutaArchivoJSON = "db.json";

// Leer el contenido del archivo
fs.readFile(rutaArchivoJSON, "utf8", (error, data) => {
  if (error) {
    console.error("Error al leer el archivo JSON:", error);
    return;
  }

  try {
    const jsonParseado = JSON.parse(data);
    // console.log(`NODE -> ${jsonParseado}`)
    respuesta.json(jsonParseado);

  } catch (error) {
    console.error("Error al parsear el JSON:", error);
  }
});

});

// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(puerto, (err) => {
  if (err) {
    // Aquí manejar el error
    console.error("Error escuchando: ", err);
    return;
  }
  // Si no se detuvo arriba con el return, entonces todo va bien ;)
  console.log(`Escuchando en el puerto :${puerto}`);
});
