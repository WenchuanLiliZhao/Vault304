// const PageBody: React.FC<Props> = ({ children }) =>

import React from "react";
import { Book, Channel, Chapter, Post } from "../ObjectShapes/PageShapes";
import styles from "./Layouts.module.scss";
import { Footer, Nav_Btn, Nav_Top, NavLink2Top } from "./Navigations";
import { PageHeader_Channel } from "./PageHeaders";
import { MDBlock } from "../Functions/Markdown";

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
  return (
    <>
      {book.toc !== undefined ? (
        <aside>
          {book.toc !== undefined &&
            book.toc.map((chapter: Chapter, i: number) => (
              <div key={`${chapter}${i}`}>
                {chapter.title}
                <div>
                  {chapter.sections.map((section: Post, k: number) => (
                    <NavLink2Top
                      key={`${section}${k}`}
                      to={`/${section.info.path}`}
                    >
                      {section.info.title}
                    </NavLink2Top>
                  ))}
                </div>
              </div>
            ))}
        </aside>
      ) : (
        ""
      )}
      <article className={styles["article"]}>
        {Array.isArray(page.content) && (
          <>
            {page.content.map((item, i: number) => (
              <React.Fragment key={`${item}${i}`}>
                {typeof item === "string" && <MDBlock>{item}</MDBlock>}
                {typeof item === "object" && item}
              </React.Fragment>
            ))}
          </>
        )}
      </article>
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
