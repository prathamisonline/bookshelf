import Book from "../models/book.js"

export const createBook = async (req, res) => {
    const newBook = new Book(req.body);
    try {
        const savedBook = await newBook.save()
        res.status(200).json({ message: "ok", savedBook });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }

}

export const getAllBook = async (req, res) => {
    try {
        const savedBook = await Book.find()
        res.status(200).json({ message: "ok", savedBook });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}
export const getBook = async (req, res) => {
    try {
        const savedBook = await Book.findById(req.params.id)
        res.status(200).json({ message: "ok", savedBook });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}
export const updateBook = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Book.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ message: "Book Updated", data });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}
// export const updateBook = async (req, res, next) => {
//     try {
//         const updatedHotel = await Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
//         res.status(200).json(updatedHotel)

//     } catch (err) {
//         next(err)

//     }

// }
export const deleteBook = async (req, res) => {
    try {
        const savedBook = await Book.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Book deleted successfully", savedBook });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}







