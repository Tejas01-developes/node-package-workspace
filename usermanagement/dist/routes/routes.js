import express from 'express';
import { loginuser, registeruser } from '../controller/userentry.js';
const router = express.Router();
router.post("/", registeruser);
router.post("/login", loginuser);
export default router;
//# sourceMappingURL=routes.js.map