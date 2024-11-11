import { Channel } from "../../../components/ObjectShapes/PageShapes";
import { HTMLPlayground } from "../../../playground/CodePlayground";
import Tool_ImageDimensionChecker from "../independent/Tools/ImageDimensionChecker";

const Playground: Channel = {
  info: {
    title: "MiniTools",
    path: "tools",
    summary: "",
  },

  content: [
    <>
      <Tool_ImageDimensionChecker />
      <HTMLPlayground
        input={{
          html: 
`<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
    <p>This is a simple coding playground.</p>
  </body>
</html>`,
          css:
`body {
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #4CAF50;
}

p {
  color: #555;
}`,
          js: 
`document.querySelector('h1').onclick = function() {
  alert('Hello, World!');
};`,
        }}
      />
    </>,
  ],
};

export default Playground;
