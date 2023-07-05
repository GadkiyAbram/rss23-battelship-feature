import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import {WebSocketServer} from 'ws';
import {cmdHandler} from '../handlers/cmdHandler.js';

export const httpServer = http.createServer(function (req, res) {
    const __dirname = path.resolve(path.dirname(''));
    const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
    fs.readFile(file_path, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

const ws = new WebSocketServer({server: httpServer});

ws.on('connection', (socket) => {
    console.log('Connected!');

    socket.on('message', (msg) => {
        try {
            const {type, data: payload } = JSON.parse(msg.toString());

            const result = cmdHandler(type, payload);

            socket.send(JSON.stringify(result));
        } catch (err) {
            console.log(err);
        }
    })
});
