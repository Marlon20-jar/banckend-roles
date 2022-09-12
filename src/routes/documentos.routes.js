import { Router } from "express"
const router = Router()

import *as documentosCtrl from '../controllers/documentos.controllers';
import {authjwt} from '../middlewares';

router.post("/", [authjwt.verifyToken, authjwt.isTeacher || authjwt.isStudent], documentosCtrl.CreateDocumento);

router.get("/", documentosCtrl.getDocumento);

router.get("/:documentosId", documentosCtrl.getDocumentoById);

router.put("/:documentosId", [authjwt.verifyToken, authjwt.isTeacher || authjwt.isStudent], documentosCtrl.updateDocumentoById);

router.delete("/:documentosId", [authjwt.verifyToken, authjwt.isStudent || authjwt.isTeacher], documentosCtrl.deleteDocumentoById);


export default router;
