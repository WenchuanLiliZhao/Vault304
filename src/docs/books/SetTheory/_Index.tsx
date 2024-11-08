import { CreateBook } from "../../../components/Functions/BookHandling";
import { Book } from "../../../components/ObjectShapes/PageShapes";
import NaturalNumbers from "./NaturalNumbers";

const book: Book = {
  cover: {
    info: {
      title: "Notes for Set Theory",
      path: "Notes for Set Theory",
      pageType: "book cover",
      summary: "",
      latest_update: [1, 1, 1],
      cover: {
        url: "",
        caption: undefined
      },
      authors: [],
      label: "mathematics",
      tags: [],
      theme: undefined,
      sidebar: undefined
    },
    content: (<>sss</>)
  },
  start_reading: NaturalNumbers,
  pages: {
    NaturalNumbers
  },
  toc: undefined
}

const Book_SetTheory = CreateBook(book)

export default Book_SetTheory