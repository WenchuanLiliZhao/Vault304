// Home.tsx

import MapBookToc from "../../components/Functions"
import { Page } from "../../Interfaces"
import Toc_HowToBuildReact from "../books/HowToBuildReact/_Toc"



const Home: Page = {
  info: {
    title: "Home",
    path: "",
    summary: "",
    latest_update: [2024, 9, 28],
    cover: "",
    authors: [],
    label: "",
    tags: []
  },

  content: (<>
    <h1>This is Home</h1>

    {MapBookToc(Toc_HowToBuildReact)}
  </>)
}

export default Home