import { CreateBook } from "../../../components/Functions/BookHandling";
import { Book } from "../../../components/ObjectShapes/PageShapes";
import AliquamEratVolutpat from "./AliquamEratVolutpat";
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
        url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Anna_Fernqvist%2C_rollportr%C3%A4tt_-_SMV_-_H1_122_-_Restoration.jpg",
        caption: undefined,
      },
      authors: [],
      label: "Digital Codex",
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
  start_reading: PellentesqueDiam,

  toc: {
    LoremIpsum,
    PellentesqueDiam,
    AliquamEratVolutpat,
  },
}

const Book_LoremIpsum = CreateBook(book);

export default Book_LoremIpsum;
