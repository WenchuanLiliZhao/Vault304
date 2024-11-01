import { Post, PostInfo } from "../ObjectShapes/PageShapes";

type PostMap = Post[];
export type SortBy = "date" | "a-z" | "z-a" | "title-length";

export function postFilter(channels: PostMap, sortBy: SortBy): Post[] {
  // First filter to include only posts with pageType "post"
  const postList = channels.filter((post) => post.info.pageType === "post");

  // Sort based on the specified criteria
  switch (sortBy) {
    case "date":
      return sortByDate(postList);
    case "a-z":
      return sortByTitleAsc(postList);
    case "z-a":
      return sortByTitleDesc(postList);
    case "title-length":
      return sortByTitleLength(postList);
    default:
      return postList;
  }
}

// Helper functions for different sorting methods
function sortByDate(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => {
    const [aYear, aMonth, aDay] = a.info.latest_update;
    const [bYear, bMonth, bDay] = b.info.latest_update;

    if (aYear !== bYear) {
      return bYear - aYear;
    } else if (aMonth !== bMonth) {
      return bMonth - aMonth;
    } else {
      return bDay - aDay;
    }
  });
}

function sortByTitleAsc(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => 
    a.info.title.localeCompare(b.info.title)
  );
}

function sortByTitleDesc(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => 
    b.info.title.localeCompare(a.info.title)
  );
}

function sortByTitleLength(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => 
    a.info.title.length - b.info.title.length
  );
}


// Generic filter function for Post arrays
export function filterPosts(
  posts: Post[],
  criteria: Partial<PostInfo>
): Post[] {
  return posts.filter(post => {
    // Check each criterion against the post's info
    return Object.entries(criteria).every(([key, value]) => {
      return post.info[key as keyof PostInfo] === value;
    });
  });
}

