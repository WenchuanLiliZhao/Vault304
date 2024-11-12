import { Img, ImgProps } from "../Elements/InLine/Img"
import { MDBlock } from "../Functions/Markdown"
import { PostElementSize } from "./Layouts"
import styles from "./MDElements.module.scss"

interface FigureProps {
  img: ImgProps
  size: PostElementSize
  caption: string
}

export const Figure: React.FC<FigureProps> = ({img, size, caption}) => {
  
  return (<>
    <figure className={`
      ${styles["figure"]}
      ${size}
    `}>
      <Img src={img.src} alt={img.alt} ratio={img.ratio} />

      <figcaption className={styles["caption"]}>
        <MDBlock>
          {caption}
        </MDBlock>
      </figcaption>
    </figure>
  </>)
}



