import { Img } from "../../../components/Elements/InLine/Img";
import { Post } from "../../../components/ObjectShapes/PageShapes";
import Authors from "../../contributors/_Contributors";

const AliquamEratVolutpat: Post = {
  info: {
    title: "Aliquam Erat Volutpat",
    path: "AliquamEratVolutpat",
    summary: "Vivamus nunc felis, interdum sed accumsan at, finibus et dui. Aenean sed massa dictum, condimentum felis sit amet, suscipit felis. Donec a tempor enim. In ut orci sit amet lacus bibendum convallis. Sed ac placerat orci. Duis orci diam, eleifend sit amet imperdiet ac, hendrerit sit amet mauris.",
    latest_update: [2024, 10, 28],
    cover: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/17/2024_CIMSS_22W_Twentytwo_visible_infrared_satellite_loop.gif",
      caption: undefined,
    },
    authors: [
      {
        data: Authors.Contributors_Wenchuan,
        role: "author",
      },

      {
        data: Authors.Contributors_LuShu,
        role: "illustrator",
      },
    ],
    label: "Digital Codex",
    tags: ["UI/UX design", "Loren Ipsum"],
    theme: undefined,
  },
  content: [],
};

AliquamEratVolutpat.content = [
`
Let $x$ be a set and let $Y \\ni x$,
`,

<Img src={AliquamEratVolutpat.info.cover.url} alt={""} />
]



export default AliquamEratVolutpat;
