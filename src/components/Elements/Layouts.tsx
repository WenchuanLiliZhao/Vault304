// const PageBody: React.FC<Props> = ({ children }) =>

import React from "react";
import { Book, Channel, Post } from "../ObjectShapes/PageShapes";
import styles from "./Layouts.module.scss";
import { MapBookToc } from "../Functions/BookHandling";
import { Footer, Nav_Btn, Nav_Top } from "./Navigations";
import { PageHeader_Channel } from "./PageHeaders";

interface PropsChannel {
  channel: Channel;
}

const Layout_Channel: React.FC<PropsChannel> = ({ channel }) => {
  return (
    <>
      <div className={`${styles.channelContent}`}>
        <Nav_Top />
        <PageHeader_Channel channel={channel} />
        {channel.headline !== undefined ? channel.headline : null}
        <main className={`${styles.main}`}>{channel.content}</main>
        <Footer />
      </div>
      <Nav_Btn />
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
