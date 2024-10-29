import { MapBookToc } from "../../../components/BookHandling"
import { Channel } from "../../../ObjectShapes"
import Books from "../../books/_Books"

const Home: Channel = {
  info: {
    title: "Home",
    path: "",
    pageType: "channel"
  },

  content: (<>
    <h1>This is Home</h1>

    <MapBookToc book={Books.Book_TheBookOfLoremIpsum} />

    <MapBookToc book={Books.Book_SetTheory} />
  </>)
}

export default Home