import express from "express"
import { createBook, getBook, getAllBook, updateBook, deleteBook } from "../controller/book.js";


const router = express.Router();


router.post("/", createBook)
router.get("/", getAllBook)
router.get("/find/:id", getBook)
router.put("/book/:id", updateBook)
router.delete("/:id", deleteBook)

export default router