import { Channel } from "../../../components/ObjectShapes/PageShapes";
import { CodePlayground } from "../../../playground/CodePlayground";
import Tool_ImageDimensionChecker from "../independent/Tools/ImageDimensionChecker";

const Playground: Channel = {
  info: {
    title: "MiniTools",
    path: "tools",
    summary: "",
  },

  content: [(<>
    <Tool_ImageDimensionChecker />
    <CodePlayground />
  </>)]
}

export default Playground