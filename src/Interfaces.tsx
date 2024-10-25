interface Author {
  data: Page,
  role?: string,
}

interface Book {
  coverPage: Page,
  toc: {[key: string]: Page}
}

interface Page {
  info: {
    title: string;
    key: string;
    brief: string;
    latest_update: [number, number, number];
    cover: string;
    type: string;
    authors: Author[];

    label: string;
    tags: string[];

    theme?: { [key: string]: string };

    inbook?: Book;
  };

  content: (string | JSX.Element)[];
}

export type { Author, Book, Page }