import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//configurando variaveis de ambiente
dotenv.config();

//criando o server
const server = express();

//criando e configurando o template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Definindo os arquivos estaticos
server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

server.use((req, res) => {
    res.render('pages/404');
});

//Rodar o servidor
server.listen(process.env.PORT);
