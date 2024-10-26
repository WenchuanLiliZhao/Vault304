// About.tsx

import { Page } from "../../../ObjectShapes"

const About: Page = {
  info: {
    title: "About",
    path: "about",
    summary: "",
    latest_update: [2024, 9, 28],
    cover: {
      url: "",
      caption: undefined
    },
    authors: [],
    label: "",
    tags: []
  },

  content: (<>
    <h1>This is About</h1>
  </>)
}

export default About