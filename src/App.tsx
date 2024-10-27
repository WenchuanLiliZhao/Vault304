import "./components/AppStyles/_app.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authors from "./docs/contributors/_Contributors";
import SiteAppendix from "./docs/pages/siteAppendix/_Toc";
import Channels from "./docs/pages/channels/_Toc";
import Books from "./docs/books/_Books";
import React from "react";
import { Layout_Article, Layout_Channel } from "./components/Layouts";
import Home from "./docs/pages/channels/Home";
import { Page } from "./ObjectShapes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout_Channel page={Home} />} />

          {Object.values(Channels).map((item: Page, i: number) => (
            <Route
              key={`${item}${i}`}
              path={`/${item.info.path}`}
              element={<Layout_Channel page={item} />}
            />
          ))}

          {Object.values(SiteAppendix).map((item: Page, i: number) => (
            <Route
              key={`${item}${i}`}
              path={`/${item.info.path}`}
              element={<Layout_Channel page={item} />}
            />
          ))}

          {Object.values(Authors).map((item: Page, i: number) => (
            <Route
              key={`${item}${i}`}
              path={`/${item.info.path}`}
              element={<Layout_Channel page={item} />}
            />
          ))}

          {Object.values(Books).map((book, i: number) => (
            <React.Fragment key={`${book}${i}`}>
              <Route
                path={`/${book.cover.info.path}`}
                element={book.cover.content}
              />

              {Object.values(book.toc).map((page, k: number) => (
                <Route
                  key={`${page}${k}`}
                  path={`/${page.info.path}`}
                  element={
                    <Layout_Article page={page} book={book} />
                  }
                />
              ))}
            </React.Fragment>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
