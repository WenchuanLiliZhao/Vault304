import styles from "./Cards.module.scss";
import { Book, Post } from "../../ObjectShapes/PageShapes";
import { postFilter } from "../../Functions/PostSetHandling";
import { MDBlock } from "../../Functions/Markdown";

interface PropsCard {
  book: Book;
}

export const BookCard_Normal: React.FC<PropsCard> = ({ book }) => {
  const tocArray = Object.values(book.pages);

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
    post = postFilter(Object.values(book.pages), "date")[0];
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
              <MDBlock>
                {post.info.cover.caption !== undefined
                  ? post.info.cover.caption
                  : `The cover of *${post.info.title}*`}
              </MDBlock>
            </figcaption>
          </figure>

          <div className={styles["text-info"]}>
            <div className={styles["container"]}>
              <div className={styles["info"]}>
                <div className={styles["title"]}>{post.info.title}</div>
                <div className={styles["summary"]}>
                  <MDBlock>{post.info.summary}</MDBlock>
                </div>
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

        <a href={`/${book.cover.info.path}`} className={styles["book"]}>
          <figure className={styles["book-cover"]}>
            <div className={styles["img-container"]}>
              <img
                className={styles["cover-img"]}
                src={book.cover.info.cover.url}
                alt={book.cover.info.cover.caption}
              />
            </div>

            <figcaption className={styles["caption"]}>
              {book.cover.info.cover.caption != undefined ? (
                <MDBlock>{book.cover.info.cover.caption}</MDBlock>
              ) : (
                <>
                  The post <em>{post.info.title}</em> is included in the book{" "}
                  <em>{book.cover.info.title}</em>
                </>
              )}
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
};
