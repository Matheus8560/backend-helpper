import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

class App{
    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.l1eem.mongodb.net/helpper?retryWrites=true&w=majority',{
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