import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors());  //liberar o acesso da api para tds os sites; outra forma = cors:'*'
/*server.use(cors({
    origin: '*',
    methods: ['GET','POST']
}));*/

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));


//server.use('/api', apiRoutes);
server.use(apiRoutes);


server.use( (req: Request, res: Response)=> {
    res.status(400);
    res.json({erros: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT);