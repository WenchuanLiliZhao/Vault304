import { Channel } from "../../../components/ObjectShapes/PageShapes";
import Tool_ImageDimensionChecker from "./Tools/ImageDimensionChecker";

const Tools: Channel = {
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

export default Tools