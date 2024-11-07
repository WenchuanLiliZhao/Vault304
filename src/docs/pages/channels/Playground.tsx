import { Channel } from "../../../components/ObjectShapes/PageShapes";
import Tool_ImageDimensionChecker from "../independent/Tools/ImageDimensionChecker";

const Playground: Channel = {
  info: {
    pageType: "channel",
    title: "MiniTools",
    path: "tools",
    summary: "",
  },

  content: (<>
    <Tool_ImageDimensionChecker />
  </>)
}

export default Playground