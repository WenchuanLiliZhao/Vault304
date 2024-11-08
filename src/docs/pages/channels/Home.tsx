import { BookCard_Headline } from "../../../components/Elements/Cards/Cards";
import { PostCardList } from "../../../components/Elements/Cards/CardLists";
import { Channel } from "../../../components/ObjectShapes/PageShapes";
import { SiteInfo } from "../../../SiteInfo";
import { BookPagesArray } from "../../books/_Books";
import Book_LoremIpsum from "../../books/TheBookOfLoremIpsum/_Index";

const Home: Channel = {
  info: {
    title: "Home",
    title_display: SiteInfo.title,
    path: "",
    summary:
      "Vivamus nunc felis, interdum sed accumsan at, finibus et dui. Aenean sed massa dictum, condimentum felis sit amet, suscipit felis. Donec a tempor enim. In ut orci sit amet lacus bibendum convallis. Sed ac placerat orci. Duis orci diam, eleifend sit amet imperdiet ac, hendrerit sit amet mauris.",
  },
  headline: <BookCard_Headline book={Book_LoremIpsum} show="latest" />,
  content: [(
    <>
      <PostCardList
        array={BookPagesArray}
        sortby={"date"}
        preloadCount={undefined}
        loadCount={undefined}
      />
    </>
  )],
};

export default Home;
