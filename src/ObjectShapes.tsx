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
  pageType: string;
}

export interface Page {
  info: PageInfo;
  content: JSX.Element | string | (JSX.Element | string)[];
}



interface ChannelInfo extends PageInfo {
  pageType: "channel"
}

export interface Channel extends Page {
  info: ChannelInfo;
}

interface Author {
  data: Post;
  role: AuthorRole;
}

interface PostInfo extends PageInfo {
  pageType: "post" | "tocDiv";
  summary: string;
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

export interface Book {
  cover: Post;
  status: "" | "published";
  toc: { [key: string]: Post }
};

export type PageTypes = Channel | Page | Post | Book