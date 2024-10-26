import { Page } from "../../../ObjectShapes";
import Authors from "../../contributors/_Contributors";

const LoremIpsum: Page = {
  info: {
    title: "Lorem Ipsum!",
    path: "Lorem Ipsum",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    latest_update: [2024, 10, 25],
    cover: {
      url: "https://doodleipsum.com/700/flat?bg=7463D9&i=9bd6f51bc3c56b8a782c5bb8ed83d90f",
      caption: `By [Doodle Ipsum](https://doodleipsum.com/)`,
    },
    authors: [
      {
        data: Authors.Contributors_Wenchuan,
        role: "author",
      },

      {
        data: Authors.Author_LuShu,
        role: "illustrator",
      },
    ],
    label: "",
    tags: ["UI/UX design", "Loren Ipsum"],
    theme: undefined,
  },
  content: (
    <>
      <h1>Lorem Ipsum!</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
        enim sit amet metus venenatis finibus.
      </p>
    </>
  ),
};

export default LoremIpsum;
