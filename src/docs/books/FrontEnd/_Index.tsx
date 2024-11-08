import { CreateBook } from "../../../components/Functions/BookHandling";
import { Book } from "../../../components/ObjectShapes/PageShapes";
import { Labels } from "../../../components/ObjectShapes/Strings";

const book: Book = {
  cover: {
    info: {
      cover: {
        url: "",
        caption: undefined
      },
      authors: [],
      label: Labels.development,
      tags: [],
      title: "Learning Notes for Front-end Development",
      path: "/learning-notes-for-front-end-development",
      summary: "aaa",
    },
    content: []
  },
  loadToc: false,
  pages: {},
}

const Book_FrontEnd = CreateBook(book)

export default Book_FrontEnd