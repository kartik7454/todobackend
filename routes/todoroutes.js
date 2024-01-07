import express from "express"

import { loginuser,createuser, todoshow ,addtodo} from '../controllers/todocontrollers.js';

const router = express.Router()


//get specific events

router.get('/:id',todoshow)
router.post('/register',createuser)
router.post('/login',loginuser)
router.patch('/:id',addtodo)

export{router}
