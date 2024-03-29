import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

class App{
    constructor(){
        this.server = express();

        mongoose.connect('Adicione aqui sua string de conexao com mongodb',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors());
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;