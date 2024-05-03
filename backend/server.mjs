import http from 'node:http';
import fsp from 'node:fs/promises';
import path from 'node:path';

const PORT = 3001;

const gestionArchivo = async (req, res) => {
    try {
        const eventosPath = path.join('.', 'data', 'eventos1.json');

        const archivoSolicitado = await fsp.readFile(eventosPath);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(archivoSolicitado);
    } catch (error) {
        res.writeHead(404);
        res.end('No encontrado');
    }
};

const guardarConvidados = async (convidados) => {
    try {
        const eventosPath = path.join('.', 'data', 'eventos1.json');

        await fsp.writeFile(eventosPath, JSON.stringify(convidados, null, 2));
    } catch (error) {
        console.error('Ocorreu um erro ao guardar os convidados:', error);
    }
};

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        const indexPath = path.resolve(path.join('.', '..', 'frontend', 'index.html'));
        try {
            const indexContent = await fsp.readFile(indexPath, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(indexContent);
        } catch (error) {
            res.writeHead(404);
            res.end('No encontrado');
        }
    } else if (req.url === '/api/guests') {
        gestionArchivo(req, res);
    } else {
        res.writeHead(404);
        res.end('No encontrado');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
