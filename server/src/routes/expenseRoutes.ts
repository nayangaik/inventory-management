import { Router } from "express";
import expenseController from "../controllers/expenseController";

const router = Router();

router.get("/", expenseController.getExpensesByCategory);

export default router;