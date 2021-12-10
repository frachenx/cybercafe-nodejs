import express,{Application} from 'express';
import morgan from 'morgan'
import cors from 'cors'

import adminRouter from './routes/adminRoutes';

class Server{
    app:Application
    
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        const cors1:any = cors();
        this.app.use(cors1);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
    }

    routes():void{
        this.app.use('/',adminRouter);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log("Server On Port: ",this.app.get('port'));
        })
    }


}

const server = new Server();
server.start();