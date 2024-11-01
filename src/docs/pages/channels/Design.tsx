// Home.tsx
import { PostCardList } from "../../../components/Elements/Cards/CardLists";
import { filterPosts } from "../../../components/Functions/PostSetHandling";
import { Channel } from "../../../components/ObjectShapes/PageShapes";
import { BookPagesArray } from "../../books/_Books";

const Design: Channel = {
  info: {
    title: "Art & Design",
    path: "ArtAndDesign",
    summary:
      "Vivamus nunc felis, interdum sed accumsan at, finibus et dui. Aenean sed massa dictum, condimentum felis sit amet, suscipit felis. Donec a tempor enim. In ut orci sit amet lacus bibendum convallis. Sed ac placerat orci. Duis orci diam, eleifend sit amet imperdiet ac, hendrerit sit amet mauris.",
    pageType: "channel",
  },

  content: (
    <>
      <PostCardList
        array={filterPosts(BookPagesArray, { label: "mathematics" })}
        preloadCount={10}
        loadCount={10}
        sortby={"date"}
      />
    </>
  ),
};

export default Design;
