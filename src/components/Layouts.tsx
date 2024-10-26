// const PageBody: React.FC<Props> = ({ children }) =>

import React from "react";
import { Book, Page } from "../ObjectShapes";
import styles from "./Layouts.module.scss";
import { MapBookToc } from "./Functions";

interface PropsArticle {
  page: Page;
  book: Book;
}

const Layout_Article: React.FC<PropsArticle> = ({ book, page }) => {
  return (
    <>
      {book.status == "published" ? (
        <aside>
          <MapBookToc book={book} />
        </aside>
      ) : (
        ""
      )}
      <article>{page.content}</article>
    </>
  );
};

interface PropsBookCover {
  book: Book
}

const Layout_BookCover: React.FC<PropsBookCover> = ({book}) => {
  return (
    <>
      {book.status == "published" ? (
        <>
          {book.cover.info.title}
        </>
      ) : ""}
    </>
  )
}

interface PropsChannel {
  page: Page;
}

const Layout_Channel: React.FC<PropsChannel> = ({ page }) => {
  return <div className={`${styles.channelContent}`}>{page.content}</div>;
};

export { Layout_Channel, Layout_Article, Layout_BookCover };
