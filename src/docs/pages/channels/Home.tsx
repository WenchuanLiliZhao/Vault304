import { MapBookToc } from "../../../components/Functions"
// import { ScrollableCalendar } from "../../../components/InLineElements/Calendar"
import { Page } from "../../../ObjectShapes"
import Books from "../../books/_Books"

const Home: Page = {
  info: {
    title: "Home",
    path: "",
    summary: "",
    latest_update: [2024, 9, 28],
    cover: {
      url: "",
      caption: undefined
    },
    authors: [],
    label: "",
    tags: []
  },

  content: (<>
    <h1>This is Home</h1>

    <MapBookToc book={Books.Book_TheBookOfLoremIpsum} />

    <MapBookToc book={Books.Book_SetTheory} />

    {/* <ScrollableCalendar /> */}
  </>)
}

export default Home