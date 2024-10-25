type Date = [number, number, number]

interface Author {
  data: Page,
  role?: string,
}

interface Book {
  coverPage: Page,
  toc: object,
}

interface Page {
  info: {
    title: string;
    path: string;
    summary: string;
    latest_update: Date;
    cover: string;
    authors: Author[];

    label: string;
    tags: string[];

    theme?: { [key: string]: string };
    sidebar?: JSX.Element;
  };

  content: (string | JSX.Element)[] | JSX.Element;
}

export type { Author, Book, Page }