import { Book, Post } from "../ObjectShapes/PageShapes";

// ========================
// 创造书籍
// ========================

// 定义辅助类型来从 Book 中提取字段并校正拼写错误
type CorrectedBook = {
  cover: Book["cover"];
  status: Book["status"];
  start_reading?: Book["start_reading"];
  pages: Book["pages"];
  toc: Book["toc"];
};

type BookA<T extends Record<string, Post>> = CorrectedBook & {
  start_reading?: Book["start_reading"];
  pages: T;
};

type BookParams<T extends Record<string, Post>> = CorrectedBook & {
  start_reading?: Book["start_reading"];
  pages: T;
};

// 创建一个生成 Book 对象的函数
export function CreateBook<T extends Record<string, Post>>({
  cover,
  status,
  start_reading,
  pages,
  toc,
}: BookParams<T>): BookA<T> {
  // Extract all dates from pages
  const dates: [number, number, number][] = Object.values(pages).map(
    (page) => page.info.latest_update
  );

  // Find the most recent date
  const mostRecentDate = dates.reduce((latest, current) => {
    const latestDate = new Date(latest[0], latest[1] - 1, latest[2]);
    const currentDate = new Date(current[0], current[1] - 1, current[2]);

    return currentDate > latestDate ? current : latest;
  });

  // Update cover's latest_update with the most recent date
  cover.info.latest_update = mostRecentDate;

  // Reorganize all paths
  Object.values(pages).forEach((page) => {
    page.info.path = `${cover.info.path}/${page.info.path}`;
  });

  return { cover, status, start_reading, pages, toc };
}
