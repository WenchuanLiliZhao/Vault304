import { CreateBook } from "../../../components/Functions/BookHandling";
import { Book } from "../../../components/ObjectShapes/PageShapes";
import NaturalNumbers from "./NaturalNumbers";

const book: Book = {
  cover: {
    info: {
      title: "Notes for Set Theory",
      path: "Notes for Set Theory",
      summary: "",
      cover: {
        url: "",
        caption: undefined
      },
      authors: [],
      label: "mathematics",
      tags: [],
      theme: undefined,
      sidebar: undefined,
    },
    content: []
  },
  loadToc: false,
  start_reading: NaturalNumbers,
  pages: {
    NaturalNumbers
  },
}

const Book_SetTheory = CreateBook(book)

export default Book_SetTheory