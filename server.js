const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Agrega el registro de solicitud antes de configurar rutas o middlewares
server.use((req, res, next) => {
    if (req.path !== '/favicon.ico') {
        console.log(`Solicitud recibida en la ruta: ${req.path}`);
    }
    next();
});

server.use(middlewares);
server.use('/api', router); // Configura una ruta /api para servir datos desde db.json

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});