export const AuthorRoles = [
  "",
  "author",
  "illustrator",
  "designer",
  "programmer",
] as const;

type AuthorRole = (typeof AuthorRoles)[number];


interface PageInfo {
  title: string;
  path: string;
  summary: string;
  pageType: string;
}

export interface Page {
  info: PageInfo;
  content: JSX.Element | string | (JSX.Element | string)[];
}

interface ChannelInfo extends PageInfo {
  pageType: "channel";
  title_display?: string | JSX.Element;
}

export interface Channel extends Page {
  info: ChannelInfo;
  headline?: JSX.Element;
}

interface Author {
  data: Post;
  role: AuthorRole;
}

interface PostInfo extends PageInfo {
  pageType: "post";
  latest_update: [number, number, number];
  cover: {
    url: string;
    caption?: string;
  };
  authors: Author[];

  label: string;
  tags: string[];

  theme?: { [key: string]: string };
  sidebar?: JSX.Element;
}

export interface Post {
  info: PostInfo;

  content: (string | JSX.Element)[] | JSX.Element;
}


interface BookCoverInfo extends Omit<PostInfo, 'pageType'> {
  pageType: "book cover";
}

interface BookCover extends Omit<Post, 'info'> {
  info: BookCoverInfo;
}

export interface Book {
  cover: BookCover;
  status: "" | "published";
  start_reading?: Post;
  toc: { [key: string]: Post }
};