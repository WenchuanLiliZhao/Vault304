// const PageBody: React.FC<Props> = ({ children }) =>

import React from "react";
import { Book, Channel, Post } from "../ObjectShapes/PageShapes";
import styles from "./Layouts.module.scss";
import { Footer, Nav_Btn, Nav_Top, NavLink2Top } from "../Elements/Navigations";
import { PageHeader_Channel } from "../Elements/PageHeaders";
import { ContentMapping } from "./LayoutFunctions";


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
        <main className={`${styles.main}`}>
          <ContentMapping content={channel.content} />
        </main>
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
  return (
    <>
      {book.loadToc && (
        <aside>
          <ul>
            {Object.values(book.pages).map((page: Post, i: number) => (
              <li key={`${page}${i}`}>
                <NavLink2Top to={`${page.info.path}`}>
                  {page.info.title}
                </NavLink2Top>
              </li>
            ))}
          </ul>
        </aside>
      )}
      <article className={styles["article"]}>
        {Array.isArray(page.content) && (
          <ContentMapping content={page.content} />
        )}
      </article>
    </>
  );
};

interface PropsBookCover {
  book: Book;
}

const Layout_BookCover: React.FC<PropsBookCover> = ({ book }) => {
  return <>{book.cover.info.title}</>;
};

export { Layout_Channel, Layout_Article, Layout_BookCover };
