// const PageBody: React.FC<Props> = ({ children }) =>

import React from "react";
import { Page } from "../Interfaces";
import { MapBookToc } from "./Functions";

interface Props {
  page: Page;
  toc: { [key: string]: Page };
  loadToc: boolean;
}

const Layout_Article: React.FC<Props> = ({ toc, page, loadToc }) => {
  return (
    <>
      <aside>{loadToc ? <>{MapBookToc(toc)}</> : ""}</aside>
      <article>{page.content}</article>
    </>
  );
};

const Layout_Channel: React.FC<Props> = ({ page }) => {
  return (
    <div>{page.content}</div>
  )
};

export { Layout_Channel, Layout_Article };
