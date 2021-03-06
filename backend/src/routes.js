import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliverieController from './app/controllers/DeliverieController';
import DeliverieStatusController from './app/controllers/DeliverieStatusController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.get('/deliveryman/deliveries', DeliverieStatusController.index);
routes.get('/deliveryman/:id/deliveries', DeliverieStatusController.show);

routes.put(
  '/deliveryman/:deliverymanId/deliveries/:deliveryId',
  DeliverieStatusController.update
);

routes.post('/files/signature', upload.single('file'), FileController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);
routes.delete('/users/:userId', UserController.delete);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:recipientId', RecipientController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/deliverymans', DeliverymanController.index);
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:deliverymanId', DeliverymanController.update);
routes.delete('/deliverymans/:deliverymanId', DeliverymanController.delete);

routes.get('/deliveries', DeliverieController.index);
routes.post('/deliveries', DeliverieController.store);
routes.put('/deliveries/:id', DeliverieController.update);
routes.delete('/deliveries/:id', DeliverieController.delete);

routes.get('/delivery/problems', DeliveryProblemController.show);
routes.get(
  '/delivery/:deliveryIdProblem/problems',
  DeliveryProblemController.index
);
routes.post('/delivery/:deliveryId/problems', DeliveryProblemController.store);
routes.delete(
  '/problem/:deliveryId/cancel-delivery',
  DeliveryProblemController.delete
);

export default routes;
