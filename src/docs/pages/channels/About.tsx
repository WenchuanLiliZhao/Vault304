// About.tsx

import { Channel } from "../../../components/ObjectShapes/PageShapes"
import { GoBackButton } from "../../../components/Elements/Buttons"

const About: Channel = {
  info: {
    title: "About",
    path: "about",
    summary: "Vivamus nunc felis, interdum sed accumsan at, finibus et dui. Aenean sed massa dictum, condimentum felis sit amet, suscipit felis. Donec a tempor enim. In ut orci sit amet lacus bibendum convallis. Sed ac placerat orci. Duis orci diam, eleifend sit amet imperdiet ac, hendrerit sit amet mauris.",
  },

  content: [(<>
    <GoBackButton />
    <h1>This is About</h1>
  </>)]
}

export default About