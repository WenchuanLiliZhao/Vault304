import { Route } from "react-router-dom";
import { Page } from "../Interfaces";
import { Layout_Article, Layout_Channel } from "./Layouts";

function MapPagesRoute(
  toc: { [key: string]: Page },
  layout: "channels" | "posts" | "book"
) {
  return (
    <>
      {Object.values(toc).map((page, i: number) => (
        <Route
          key={`${page}${i}`}
          path={`/${page.info.path}`}
          element={
            <>
              {layout == "channels" ? (
                <Layout_Channel page={page} toc={toc} loadToc={false} />
              ) : (
                ""
              )}

              {layout == "posts" ? (
                <Layout_Article page={page} toc={toc} loadToc={false} />
              ) : (
                ""
              )}

              {layout == "book" ? (
                <Layout_Article page={page} toc={toc} loadToc={true} />
              ) : (
                ""
              )}
            </>
          }
        />
      ))}
    </>
  );
}

function MapBookToc(toc: { [key: string]: Page }) {
  return (
    <ul>
      {Object.values(toc).map((page, i) => (
        <li key={`${page}${i}`}>
          <a href={`${page.info.path}`}>{page.info.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default MapBookToc;

export { MapPagesRoute, MapBookToc };
