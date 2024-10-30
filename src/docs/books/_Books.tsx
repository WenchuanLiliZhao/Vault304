import { Post } from "../../ObjectShapes";
import Book_SetTheory from "./SetTheory/_Index";
import Book_LoremIpsum from "./TheBookOfLoremIpsum/_Index";

const Books = {
  Book_LoremIpsum,
  Book_SetTheory,
}

const BookTocToArray = (books: Record<string, { toc: Record<string, Post> }>): Post[] => {
  return Object.values(books).flatMap(book => Object.values(book.toc));
};

// Usage
const BookPagesArray = BookTocToArray(Books);

export {Books, BookPagesArray}