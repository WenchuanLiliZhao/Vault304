import { Post } from "../../../components/ObjectShapes/PageShapes";
import Contributors_Wenchuan from "../../contributors/Wenchuan";

const content = [
  `
In Morse-Kelley set theory, the definition of the **set of all natural numbers $\\mathbb{N}$** is derived from the axiom of infinity. This axiom ensures there exists a class $I$, which meets the following criteria:

1. I $I$ is a set, $x$ x $X$ *X*
2. $\\emptyset \\in I$, and
3. If $x \\in I$, then $x \\cup \\{x\\} \\in I$.

Such a set $I$ is called **inductive**. Although the axiom of infinity provides the foundation for constructing natural numbers, it does not render the axiom of union redundant; the latter is necessary within the broader framework of set and class operations in MK.
`,
];

const NaturalNumbers: Post = {
  info: {
    title: "The Set Theoretic Definition of Natural Numbers",
    path: "The Set Theoretic Definition of Natural Numbers",
    summary:
      "Sed nunc mi, dictum et luctus sed, tristique sed odio. Nullam vitae turpis a ligula tincidunt semper vitae id felis. Suspendisse blandit",
    latest_update: [2025, 9, 28],
    location: "Shanghai",
    cover: {
      url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Anna_Fernqvist%2C_rollportr%C3%A4tt_-_SMV_-_H1_122_-_Restoration.jpg",
      caption: undefined,
    },
    authors: [
      {
        data: Contributors_Wenchuan,
        role: "author",
      },
    ],
    label: "mathematics",
    tags: [],
    theme: undefined,
    sidebar: undefined,
  },
  content: content,
};

export default NaturalNumbers;
