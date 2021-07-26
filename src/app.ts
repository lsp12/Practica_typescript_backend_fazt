import express, { Application } from "express";
import morgan from 'morgan'
//Routes
import IndexRoutes from './Routes/index.routes'
import PostRoutes from './Routes/Post.routes'
//permissions
import cors from 'cors'

export class App {
  private app: Application;
  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middleware();
    this.routes();
  }

  middleware(){
    this.app.use(morgan('dev'));
    this.app.use(cors());
    //recibir datos de formulario como json
    /* this.app.use(express.urlencoded({ extended: false })); */
    this.app.use(express.json());
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use( PostRoutes);
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 4000);
  }

  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log("server on port",this.app.get('port'));
  }
}
