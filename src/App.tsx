import "./appStyles/_app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Channels from "./docs/pages/channels/_Toc";
import { Books } from "./docs/books/_Books";
import React from "react";
import {
  Layout_Article,
  Layout_BookCover,
  Layout_Channel,
} from "./components/Layouts/Layouts";
import Home from "./docs/pages/channels/Home";
import {
  AnyPage,
  Book,
  Channel,
  Post,
} from "./components/ObjectShapes/PageShapes";
import IndePages from "./docs/pages/independent/_Toc";
import { ScrollToBottom } from "./playground/ScrollPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* import index */}
          <Route index element={<Layout_Channel channel={Home} />} />

          <Route path="/test" element={<>
            <ScrollToBottom initialScrollPosition="bottom">
              
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta minus rem quam voluptates veniam atque pariatur tenetur beatae magnam natus. Consequatur voluptatem quod accusamus libero, quos deleniti alias doloremque repellendus.</p>
            </ScrollToBottom>
          </>} />

          {/* the following pages are special, meaning the UI are indepently designed, so we don't invoke any layout here */}
          {Object.values(IndePages).map((item: AnyPage, i: number) => (
            <Route
              key={`${item}${i}`}
              path={`/${item.info.path}`}
              element={item.content}
            />
          ))}

          {/* since all channels share the same design, we import them together */}
          {Object.values(Channels).map((item: Channel, i: number) => (
            <Route
              key={`${item}${i}`}
              path={`/${item.info.path}`}
              element={<Layout_Channel channel={item} />}
            />
          ))}

          {Object.values(Books).map((book: Book, i: number) => (
            <React.Fragment key={`${book}${i}`}>
              <Route
                path={`/${book.cover.info.path}`}
                element={<Layout_BookCover book={book} />}
              />

              {Object.values(book.pages).map((page: Post, k: number) => (
                <Route
                  key={`${page}${k}`}
                  path={`/${page.info.path}`}
                  element={<Layout_Article page={page} book={book} />}
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
