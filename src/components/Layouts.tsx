// const PageBody: React.FC<Props> = ({ children }) =>

import React from "react";
import { Book, Channel, Post } from "../ObjectShapes";
import styles from "./Layouts.module.scss";
import { MapBookToc } from "./BookHandling";
import { Nav_Top } from "./Navigations";

interface PropsChannel {
  page: Channel;
}

const Layout_Channel: React.FC<PropsChannel> = ({ page }) => {
  return (
    <>
      <div className={`${styles.channelContent}`}>
        <Nav_Top />
        <main className={`${styles.main}`}>
          {page.content}
        </main>
      </div>
    </>
  );
};

interface PropsArticle {
  page: Post;
  book: Book;
}

const Layout_Article: React.FC<PropsArticle> = ({ book, page }) => {
  console.log(page);
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
  book: Book;
}

const Layout_BookCover: React.FC<PropsBookCover> = ({ book }) => {
  return <>{book.status == "published" ? <>{book.cover.info.title}</> : ""}</>;
};

export { Layout_Channel, Layout_Article, Layout_BookCover };
