import {Router} from 'express';
import { createNewMessage, getHome, getNewPage } from '../controllers/boardController.js';

const boardRouter = Router();

boardRouter.get('', getHome);
boardRouter.get('/new', getNewPage);
boardRouter.post('/new', createNewMessage);


export default boardRouter;