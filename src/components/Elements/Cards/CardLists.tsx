import styles from "./CardLists.module.scss";
import React, { useState } from "react";
import { Author, Post } from "../../../ObjectShapes";
import { sortPostByUpdateDate } from "../../Functions/PostSetHandling";
import { DateFormatter } from "../../Functions/Date";
import { MDBlock } from "../../Functions/Markdown";

interface BookPageListProps {
  array: { [key: string]: Post };
  sortby?: "date";
  preloadCount: number;
  loadCount: number;
}

export const PostCardList: React.FC<BookPageListProps> = ({
  array,
  sortby,
  preloadCount,
  loadCount,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(preloadCount);

  const sortedPosts = sortby === "date" ? sortPostByUpdateDate(array) : [];

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + loadCount);
  };

  return (
    <>
      {sortby === "date" && (
        <div className={styles["book-page-list"]}>
          {sortedPosts.slice(0, visibleCount).map((item: Post, i: number) => (
            <React.Fragment key={`${item}${i}`}>
              <a href={`/${item.info.path}`} className={styles["post-card"]}>
                <div className={styles["header"]}>
                  <div className={styles["date"]}>
                    <div className={styles["day-and-month"]}>
                      <span className={styles["day"]}>
                        {DateFormatter(item.info.latest_update)[2]}
                      </span>
                      <span className={styles["month"]}>
                        {DateFormatter(item.info.latest_update)[1]}
                      </span>
                    </div>
                    <div className={styles["year"]}>
                      {DateFormatter(item.info.latest_update)[0]}
                    </div>
                  </div>
                  <div className={styles["label"]}>
                    {item.info.label}
                  </div>
                </div>

                <div className={styles["cover"]}>
                  <img
                    className={styles["img"]}
                    src={item.info.cover.url}
                    alt=""
                  />
                </div>

                <div className={styles["info"]}>
                  <div className={styles["title"]}>{item.info.title}</div>
                  <div className="summary">
                    <MDBlock>{item.info.summary}</MDBlock>
                  </div>
                  <div className="authors">
                    by{" "}
                    {item.info.authors.map((author: Author, k: number) => (
                      <span key={`${author}${k}`} className={styles["author"]}>
                        {k === item.info.authors.length - 1 && " and "}
                        {k !== 0 && k !== item.info.authors.length - 1 && ", "}
                        {author.data.info.title}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
              {(i + 1) % 2 === 0 && (
                <div className={styles["hr"]}>
                  ---------------------------------------
                </div>
              )}
            </React.Fragment>
          ))}
          {visibleCount < sortedPosts.length && (
            <div onClick={handleLoadMore} className={styles["load-more"]}>
              Load More
            </div>
          )}
        </div>
      )}
    </>
  );
};
