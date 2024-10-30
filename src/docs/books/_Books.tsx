import { Post } from "../../ObjectShapes";
import Book_SetTheory from "./SetTheory/_Index";
import Book_LoremIpsum from "./TheBookOfLoremIpsum/_Index";

const Books = {
  Book_LoremIpsum,
  Book_SetTheory,
}

const mapBooksToTOC = (books: Record<string, { toc: Record<string, Post> }>): Record<string, Post> => {
  return Object.values(books).reduce((acc, book) => {
    return { ...acc, ...book.toc };
  }, {});
};

const BookPages = mapBooksToTOC(Books);

export {Books, BookPages}
