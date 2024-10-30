import styles from "./CardLists.module.scss";
import React, { useState } from "react";
import { Post } from "../../../ObjectShapes";
import { sortPostByUpdateDate } from "../../Functions/PostSetHandling";

interface BookPageListProps {
  array: { [key: string]: Post };
  sortby?: "date";
  preloadCount: number;
  loadCount: number;
}

export const PostCardList: React.FC<BookPageListProps> = ({array, sortby, preloadCount, loadCount}) => {
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
            <div className={styles["post-card"]} key={`${item}${i}`}>
              {i}_{item.info.title}
            </div>
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
