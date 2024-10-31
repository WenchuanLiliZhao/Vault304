import styles from "./CardLists.module.scss";
import React, { useState } from "react";
import { Author, Post } from "../../ObjectShapes/PageShapes";
import { sortPostByUpdateDate } from "../../Functions/PostSetHandling";
import { DateFormatter } from "../../Functions/Date";
import { MDBlock } from "../../Functions/Markdown";
import { Calendar } from "../Minitools/Calendar";
import { SiteInfo } from "../../../SiteInfo";

interface BookPageListProps {
  array: Post[];
  sortby?: "date";
  preloadCount: number;
  loadCount: number;
  // note: `preloadCount` and `loadCound` must be even (2n), otherwise the UI might rendered wieredly (although it is not an actual bug)
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
    <div className={styles["post-list"]}>
      {sortby === "date" && (
        <div className={styles["list"]}>
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
                  <div className={styles["label"]}>{item.info.label}</div>
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
                  <div className={styles["summary"]}>
                    <MDBlock>{item.info.summary}</MDBlock>
                  </div>
                  <div className={styles["authors"]}>
                    by{" "}
                    {item.info.authors.map((author: Author, k: number) => (
                      <React.Fragment key={`${author}${k}`}>
                        {k === item.info.authors.length - 1 && " and "}
                        {k !== 0 && k !== item.info.authors.length - 1 && ", "}
                        <span className={styles["name"]}>
                          {author.data.info.title}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </a>

              {(i + 1) % 2 === 0 && i + 1 != sortedPosts.length && (
                <div className={styles["hr"]}></div>
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
      <div className={styles["deco"]}>
        <div className={styles["sticky-container"]}>
          <Calendar />
          <div style={{fontSize: "14px"}}>
            <p style={{fontWeight: "bold", marginBlock: '24px'}}>About {SiteInfo.title}</p>
            <p style={{ lineHeight: "1.5" }}>
              {SiteInfo.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
