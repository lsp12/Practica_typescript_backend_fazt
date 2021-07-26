import { Router } from "express";
import {indexWelcome} from '../Controllers/index.controllers'

const router = Router();

router.route('/').get(indexWelcome);


export default router;