
const http = require ('http'); //En esta parte estamos utilizando la funcion requiere para cargar el modulo http
const chalk = require ('chalk');

const host = 'localhost';
const port = 8000;

const server = http.createServer( (req,res) => {
    if (req.method === 'GET' && req.url === '/') { //definir las rutas con lo metodos HTTP
        res.writeHead (200, {'content-type':'application/json'});

    const respjson = {
        nombre: 'Alejandro',
        mensaje:'Hola estoy aprendiendo como hacer un servidor web'
    };
    res.json(JSON.stringify(respjson)); 
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Ruta no encontrada\n');
    }
});

// La funcion de listen enciende el servidor el port y los host deben ir en la izquierda no dentro del callback
server.listen(port, host, () => {
    console.log(chalk.green(`Servidor en ejecución en http://${host}:${port}`));
  });


