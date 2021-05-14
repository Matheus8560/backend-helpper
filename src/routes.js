import { Router } from 'express';

import ClineteController from './controller/CienteController';

const routes = new Router();

routes.get('/clientes', ClineteController.index);
routes.get('/cliente/:id', ClineteController.show);
routes.post('/cliente', ClineteController.store);
routes.delete('/cliente/:id', ClineteController.destroy);

export default routes;