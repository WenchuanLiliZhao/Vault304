import styles from "./BookCards.module.scss";
import { Book, Post } from "../../ObjectShapes";
import { sortPostByUpdateDate } from "../PostSetHandling";

interface PropsCard {
  book: Book;
}

export const BookCard_Normal: React.FC<PropsCard> = ({ book }) => {
  const tocArray = Object.values(book.toc)

  // Declare firstChapter before the conditional block
  let firstChapter;

  // Assign firstChapter based on the presence of book.start_reading
  if (book.start_reading !== undefined) {
    firstChapter = book.start_reading;
  } else {
    firstChapter = tocArray[0];
  }

  return <>{firstChapter.info.title}</>;
};

interface PropsHeadline {
  book: Book;
  show: "latest" | Post;
}

export const BookCard_Headline: React.FC<PropsHeadline> = ({ book, show }) => {
  let post;

  if (show === "latest") {
    post = sortPostByUpdateDate(book.toc)[0];
  } else {
    post = show;
  }

  return (
    <div className={styles["book-card--headline"]}>
      <div className={styles["container"]}>
        <div className={styles["the-post"]}>
          <figure className={styles["cover"]}>
            <div className={styles["img-container"]}>
              <img
                className={styles["cover-img"]}
                src={post.info.cover.url}
                alt={post.info.cover.caption}
              />
            </div>
            <figcaption className={styles["caption"]}>
              {post.info.cover.caption !== undefined ? (
                <>{post.info.cover.caption}</>
              ) : (
                `The cover of *${post.info.title}*`
              )}
            </figcaption>
          </figure>

          <div className={styles["text-info"]}>
            <div className={styles["container"]}>
              <div className={styles["info"]}>
                <div className={styles["title"]}>{post.info.title}</div>
                <div className={styles["summary"]}>{post.info.summary}</div>
                <div className={styles["author"]}>
                  <span>by</span>{" "}
                  <span className={styles["name"]}>
                    {post.info.authors[0].data.info.title}
                  </span>
                </div>
              </div>
              <a href={`/${post.info.path}`} className={styles["btn"]}>
                Start Reading
              </a>
            </div>
          </div>
        </div>

        <div className={styles["book"]}>
          <figure className={styles["book-cover"]}>
            <div className={styles["img-container"]}>
              <img
                className={styles["cover-img"]}
                src={book.cover.info.cover.url}
                alt={book.cover.info.cover.caption}
              />
            </div>

            <figcaption className={styles["caption"]}>
              The post <cite>{post.info.title}</cite> is included in the book{" "}
              <cite>{book.cover.info.title}</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
