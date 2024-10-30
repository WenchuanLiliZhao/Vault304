import { Post } from "../ObjectShapes";

// Function to retrieve and sort Posts by latest_update
type PostMap = { [key: string]: Post };

export function sortPostByUpdateDate(channels: PostMap): Post[] {
  // Filter the object to include only posts with pageType "post"
  const postList = Object.values(channels).filter(
    (post) => post.info.pageType === "post"
  );

  // Sort the posts by latest_update, considering it as a tuple [year, month, day]
  postList.sort((a, b) => {
    const [aYear, aMonth, aDay] = a.info.latest_update;
    const [bYear, bMonth, bDay] = b.info.latest_update;

    if (aYear !== bYear) {
      return bYear - aYear; // descending order by year
    } else if (aMonth !== bMonth) {
      return bMonth - aMonth; // descending order by month
    } else {
      return bDay - aDay; // descending order by day
    }
  });

  return postList;
}