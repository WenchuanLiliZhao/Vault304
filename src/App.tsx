import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChannelHome from "./pages/channels/Home";
import Channels from "./pages/channels/_Channels";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ChannelHome.content} />
          {Object.values(Channels).map((channel, i: number) => (
            <Route
              key={`${channel}${i}`}
              path={`/${channel.info.path}`}
              element={channel.content}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
