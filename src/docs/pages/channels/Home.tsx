import { MapBookToc } from "../../../components/Functions"
// import { ScrollableCalendar } from "../../../components/InLineElements/Calendar"
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

    {/* <ScrollableCalendar /> */}
  </>)
}

export default Home