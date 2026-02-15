import { Router } from "express";
import { upload } from "../middleware/upload.middleware";
import { authenticate } from "../middleware/auth.middleware";
import { createTransaction, getTransactionById, getTransactions, updateTransaction } from "../controllers/transaction.controller";

const router = Router()

router.post("/checkout", upload.single("image"), createTransaction)
router.get("/", authenticate, getTransactions)
router.get("/:id", authenticate, getTransactionById)
router.patch("/:id", authenticate, updateTransaction)

export default router
