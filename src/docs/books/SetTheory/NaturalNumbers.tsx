import { Post } from "../../../components/ObjectShapes/PageShapes";
import Contributors_Wenchuan from "../../contributors/Wenchuan";

const content = [
  `
aaa
`,

  `
bbbb $x$
`,
];

const NaturalNumbers: Post = {
  info: {
    title: "The Set Theoretic Definition of Natural Numbers",
    path: "The Set Theoretic Definition of Natural Numbers",
    pageType: "post",
    summary: "Sed nunc mi, dictum et luctus sed, tristique sed odio. Nullam vitae turpis a ligula tincidunt semper vitae id felis. Suspendisse blandit",
    latest_update: [2025, 9, 28],
    cover: {
      url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Anna_Fernqvist%2C_rollportr%C3%A4tt_-_SMV_-_H1_122_-_Restoration.jpg",
      caption: undefined,
    },
    authors: [
      {
        data: Contributors_Wenchuan,
        role: "author"
      }
    ],
    label: "mathematics",
    tags: [],
    theme: undefined,
    sidebar: undefined,
  },
  content: content,
};

export default NaturalNumbers;
