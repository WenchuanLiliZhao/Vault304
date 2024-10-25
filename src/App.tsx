import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChannelHome from "./pages/channels/Home";
import Toc_Channels from "./pages/channels/_Toc";
// import Toc_HowToBuildReact from "./pages/books/HowToBuildReact/_BookToc";
import { MapPagesRoute } from "./components/Functions";
import Toc_HowToBuildReact from "./pages/books/HowToBuildReact/_Toc";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ChannelHome.content} />

          {MapPagesRoute(Toc_Channels, "channels")}

          {MapPagesRoute(Toc_HowToBuildReact, "book")}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
