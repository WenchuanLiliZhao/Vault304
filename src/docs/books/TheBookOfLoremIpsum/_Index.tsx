import { CreateBook, CreateTocDiv } from "../../../components/BookHandling";
import { Book } from "../../../ObjectShapes";
import LoremIpsum from "./LoremIpsum";
import PellentesqueDiam from "./PellentesqueDiam";

const book: Book = {
  cover: {
    info: {
      title: "The Book of Lorem Ipsum",
      path: "The Book of Lorem Ipsum",
      pageType: "book cover",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis enim sit amet metus venenatis finibus. Etiam orci nulla, imperdiet ut fringilla at, suscipit id mi. Suspendisse potenti. Fusce congue enim augue, nec cursus ex efficitur in. Cras tempus tempus ex ut lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris imperdiet fermentum libero non dictum.",
      latest_update: [2024, 10, 25],
      cover: {
        url: "",
        caption: undefined,
      },
      authors: [],
      label: "Design",
      tags: [],
      theme: undefined,
    },
    content: (
      <>
        <h1>The Book of Lorem Ipsum</h1>
      </>
    ),
  },
  
  status: "published",

  toc: {
    "": CreateTocDiv({title: "---"}),
    LoremIpsum,
    PellentesqueDiam,
  },
}

const Book_TheBookOfLoremIpsum = CreateBook(book);

export default Book_TheBookOfLoremIpsum;
