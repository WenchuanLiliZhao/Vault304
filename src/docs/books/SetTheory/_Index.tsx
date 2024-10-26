import { CreateBook } from "../../../components/Functions";
import { Book } from "../../../ObjectShapes";
import NaturalNumbers from "./NaturalNumbers";

const book: Book = {
  cover: {
    info: {
      title: "Notes for Set Theory",
      path: "Notes for Set Theory",
      summary: "",
      latest_update: [1, 1, 1],
      cover: {
        url: "",
        caption: undefined
      },
      authors: [],
      label: "",
      tags: [],
      theme: undefined,
      sidebar: undefined
    },
    content: (<>sss</>)
  },
  status: "published",
  toc: {
    NaturalNumbers
  }
}

const Book_SetTheory = CreateBook(book)

export default Book_SetTheory