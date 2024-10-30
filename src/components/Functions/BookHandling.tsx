import { Book, Post } from "../../ObjectShapes";
import { NavLink2Top } from "../Elements/Navigations";

// ========================
// 创造书籍
// ========================

// 定义辅助类型来从 Book 中提取字段并校正拼写错误
type CorrectedBook = {
  cover: Book["cover"];
  status: Book["status"]; // 使用 Book['statues'] 但在生成时还原为 status
  start_reading?: Book["start_reading"];
  toc: Book["toc"];
};

// 实现 BookA 和 BookParams，使其关联到 CorrectedBook

type BookA<T extends Record<string, Post>> = CorrectedBook & {
  start_reading?: Book["start_reading"];
  toc: T;
};

type BookParams<T extends Record<string, Post>> = CorrectedBook & {
  start_reading?: Book["start_reading"];
  toc: T;
};

// 创建一个生成 Book 对象的函数
export function CreateBook<T extends Record<string, Post>>({
  cover,
  status,
  start_reading,
  toc,
}: BookParams<T>): BookA<T> {
  // Extract all dates from pages
  const dates: [number, number, number][] = Object.values(toc).map(
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

  // 这个地方，所有的 path 会被重新整理
  Object.values(toc).forEach((page) => {
    page.info.path = `${cover.info.path}/${page.info.path}`;
  });

  return { cover, status, start_reading, toc };
}

// ========================
// 映射书籍目录
// ========================
interface MapBookTocProps {
  book: Book;
}

export const MapBookToc: React.FC<MapBookTocProps> = ({ book }) => {
  return (
    <ul>
      {Object.values(book.toc).map((item: Post, i: number) => (
        <li key={`${item}${i}`}>
          {item.info.pageType == "post" ? (
            <>
              <NavLink2Top to={`/${item.info.path}`}>
                {item.info.title}
              </NavLink2Top>
            </>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
};



