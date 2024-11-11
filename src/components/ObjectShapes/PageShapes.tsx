import { Label } from "./Strings";

export type AnyPage = Page | Channel | Post | BookCover;

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
}

export interface Page {
  info: PageInfo;
  content: (JSX.Element | string)[];
}

interface ChannelInfo extends PageInfo {
  title_display?: string | JSX.Element;
}

export interface Channel extends Page {
  info: ChannelInfo;
  headline?: JSX.Element;
}

export interface Person extends Omit<Post, "info"> {
  info: PersonInfo;
}

export interface Post extends Page {
  info: PostInfo;
}

export interface Author {
  data: Person;
  role: AuthorRole;
}
export interface PostInfo extends PageInfo {
  latest_update: [number, number, number];
  location?: string;
  cover: {
    url: string;
    caption?: string;
  };
  authors: Author[];

  label: Label;
  tags: string[];

  theme?: { [key: string]: string };
  sidebar?: JSX.Element;
}

export type PersonInfo = Omit<PostInfo, "location">;

interface BookCoverInfo extends Omit<PostInfo, "latest_update" | "location"> {
  latest_update?: [number, number, number];
  location?: string;
}
export interface BookCover extends Omit<Post, "info"> {
  info: BookCoverInfo;
}

export type Chapter = {
  title: undefined | string;
  sections: Post[];
};

export interface Book {
  cover: BookCover;
  start_reading?: Post;
  loadToc: boolean;
  pages: { [key: string]: Post };
}
