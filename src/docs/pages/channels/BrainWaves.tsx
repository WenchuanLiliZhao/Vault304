// Home.tsx
import { PostCardList } from "../../../components/Elements/Cards/CardLists";
import { filterPosts } from "../../../components/Functions/PostSetHandling";
import { Channel } from "../../../components/ObjectShapes/PageShapes";
import { Labels_BrainWave } from "../../../components/ObjectShapes/Strings";
import { BookPagesArray } from "../../books/_Books";

const BrainWaves: Channel = {
  info: {
    title: "Brain Waves",
    path: "BrainWaves",
    summary:
      "Vivamus nunc felis, interdum sed accumsan at, finibus et dui. Aenean sed massa dictum, condimentum felis sit amet, suscipit felis. Donec a tempor enim. In ut orci sit amet lacus bibendum convallis. Sed ac placerat orci. Duis orci diam, eleifend sit amet imperdiet ac, hendrerit sit amet mauris.",
    pageType: "channel",
  },

  content: (
    <>
      <PostCardList
        array={filterPosts(BookPagesArray, Labels_BrainWave)}
        sortby={"date"}
        preloadCount={undefined}
        loadCount={undefined}
      />
    </>
  ),
};

export default BrainWaves;
