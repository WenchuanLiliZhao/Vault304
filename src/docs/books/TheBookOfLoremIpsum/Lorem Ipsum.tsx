import { Img } from "../../../components/InlineElements";
import { Page } from "../../../ObjectShapes";
import Authors from "../../contributors/_Contributors";

const LoremIpsum: Page = {
  info: {
    title: "Lorem Ipsum!",
    path: "Lorem Ipsum",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    latest_update: [2024, 10, 25],
    cover: {
      url: "https://doodleipsum.com/700/flat?bg=7463D9&i=9bd6f51bc3c56b8a782c5bb8ed83d90f",
      caption: `By [Doodle Ipsum](https://doodleipsum.com/)`,
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
    label: "",
    tags: ["UI/UX design", "Loren Ipsum"],
    theme: undefined,
  },
  content: (
    <>
      <h1>Lorem Ipsum!</h1>

      <Img src={"https://upload.wikimedia.org/wikipedia/commons/8/87/1581_Bunting_clover_leaf_map.jpg"} alt={"hahah"} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue
        sagittis diam, nec consectetur metus sagittis sed. Ut sit amet lacus
        aliquam, suscipit mauris at, molestie lectus. Praesent urna dui, iaculis
        eget condimentum sit amet, varius ut turpis. Sed lacus orci, ultricies
        et purus non, hendrerit finibus velit. Phasellus ex est, finibus sit
        amet imperdiet vel, lobortis at magna. Ut tempus ac dui non finibus.
        Pellentesque diam diam, volutpat sit amet ante ac, porta rhoncus tellus.
        Donec non sagittis erat. Vestibulum mauris dolor, pretium eu ullamcorper
        in, eleifend quis odio. Morbi malesuada sollicitudin est, et bibendum
        lacus sodales id. Sed tempus, dui a fermentum suscipit, massa mauris
        suscipit dui, vitae tincidunt eros risus eget magna. Sed eleifend
        condimentum erat, vitae gravida erat ultrices sit amet. Donec finibus
        sapien velit, ornare vestibulum odio laoreet vel. In hac habitasse
        platea dictumst. Vestibulum faucibus lacinia pretium. Cras quis massa id
        magna placerat viverra ac ultrices nunc. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
        rutrum placerat aliquet. Nulla facilisi. Suspendisse ac faucibus augue.
        Cras ut efficitur risus. Fusce in accumsan orci, nec posuere orci. Nunc
        id justo elementum, molestie orci vel, luctus purus. Proin auctor erat
        eu lacus placerat, non euismod lectus molestie. Vivamus mattis massa
        sem, eu euismod ante pulvinar cursus. Phasellus tincidunt turpis vel
        velit pretium, vitae egestas tortor maximus. Donec sagittis mauris at
        ultricies porttitor. Vestibulum scelerisque dolor metus, vel lacinia
        eros eleifend eu. Integer tincidunt tellus sit amet augue pulvinar, nec
        blandit nunc scelerisque. Mauris magna ligula, congue non pharetra nec,
        placerat ac orci. Sed ligula justo, gravida at dolor bibendum, convallis
        fringilla tortor. Vestibulum sit amet laoreet justo. Sed feugiat
        ullamcorper libero, vel elementum augue tristique ut. Integer laoreet
        sagittis scelerisque. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Aliquam sit amet eros sem.
        Sed hendrerit dolor sed neque mattis, mollis imperdiet lorem tempus.
        Maecenas congue tempus nisl, ut commodo magna sagittis at. Vivamus
        accumsan posuere pellentesque. Nunc at malesuada nunc. Suspendisse nec
        neque vel dolor dictum faucibus. Sed vel bibendum quam. In et elit et
        diam tincidunt maximus. Integer turpis sem, mattis ut lacinia quis,
        aliquet in purus. Etiam varius ac lacus ut ullamcorper. Praesent laoreet
        malesuada facilisis. Ut lorem tellus, posuere et placerat ut, viverra et
        eros. Sed dictum cursus eleifend. Praesent pharetra varius dui sed
        pretium. Sed ultrices ligula sed lorem gravida, at finibus sem mattis.
        Praesent a turpis sit amet dolor bibendum blandit in rhoncus lacus.
        Donec euismod, tellus tincidunt bibendum porta, libero sem vestibulum
        tellus, viverra elementum eros lectus non augue. Maecenas placerat dui
        ac turpis auctor, quis faucibus magna imperdiet. Nam sollicitudin mollis
        nisi imperdiet faucibus. Vivamus in egestas turpis, ut tempor nulla.
        Duis viverra, lorem quis viverra mollis, neque dolor accumsan dolor,
        eget viverra odio orci in mi. Proin sagittis scelerisque augue quis
        egestas. Suspendisse blandit molestie augue et condimentum. Phasellus
        vel sem tellus. Nam ligula neque, efficitur quis turpis nec, fringilla
        tincidunt augue. Suspendisse egestas pulvinar dictum. Cras eu urna eu
        felis elementum imperdiet. Nulla porta dolor sed mi rhoncus, in posuere
        orci sollicitudin. Vestibulum aliquet porttitor interdum. Duis ac odio
        fermentum, ultricies lacus sed, efficitur arcu. Integer sem erat, dictum
        eu vulputate sit amet, convallis ut nisi. Nullam sodales pulvinar odio.
        Aenean eu mi rutrum, lobortis neque scelerisque, commodo velit.
      </p>
    </>
  ),
};

export default LoremIpsum;
