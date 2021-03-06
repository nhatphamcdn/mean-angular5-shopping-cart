import * as express from 'express';
import productController from '../controllers/product.server.controller';

const setProductRoutes = (app) => {
    const router = express.Router();
    const productCtrl = new productController();

    router.route('/')
           .post(productCtrl.addProduct);
    router.route('/:page/:limit')
           .get(productCtrl.getProducts);
    
    app.use('/api/product', router);
}

export default setProductRoutes;