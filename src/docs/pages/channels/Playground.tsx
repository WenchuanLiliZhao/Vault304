import { Channel } from "../../../components/ObjectShapes/PageShapes";
import Tool_ImageDimensionChecker from "../independent/tools/ImageDimensionChecker";

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