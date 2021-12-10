import {Router} from 'express';
import {adminController} from '../controllers/adminController';

class AdminRoutes{
    public router:Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/computers',adminController.computers);
        this.router.post('/computers/add-computer',adminController.addComputer);
        this.router.get('/computers/:id',adminController.getComputer);
        this.router.put('/computers/:id',adminController.updateComputer);

        this.router.get('/users',adminController.users);
        this.router.get('/users/active-users',adminController.activeUsers);
        this.router.get('/users/archived-users',adminController.archivedUsers);
        this.router.post('/users/add-user',adminController.addUser);
        this.router.get('/users/:id',adminController.getUser);
        this.router.put('/users/:id',adminController.updateUser);
        this.router.get('/users/search/:name',adminController.getUserByName);
        this.router.get('/users/:start/:end',adminController.getUsersBetweenDates);

    }
}

const adminRouter = new AdminRoutes();
export default adminRouter.router;