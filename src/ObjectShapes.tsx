export const AuthorRoles = [
  "",
  "author",
  "illustrator",
  "designer",
  "programmer",
] as const;

type AuthorRole = (typeof AuthorRoles)[number];

interface Author {
  data: Page;
  role: AuthorRole;
}

interface Page {
  info: {
    title: string;
    path: string;
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
  };

  content: (string | JSX.Element)[] | JSX.Element;
}

type Book = {
  cover: Page;
  status: "" | "published";
  toc: { [key: string]: Page };
};

export type { Author, Page, Book };
