import { Post } from "../ObjectShapes/PageShapes";
import { Label } from "../ObjectShapes/Strings";

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


function isLabelInConst(label: Label, labelConst: Record<string, string>): boolean {
  // Check if the label is in the constant object
  return Object.values(labelConst).includes(label);
}

export function filterPosts(
  posts: Post[],
  labelConst: Record<string, string>
): Post[] {
  return posts.filter(post => {
    return isLabelInConst(post.info.label, labelConst);
  });
}

