import { Channel } from "../ObjectShapes";
import styles from "./PageHeaders.module.scss";

interface PageHeaderInfo_Channel {
  channel: Channel
}

export const PageHeader_Channel: React.FC<PageHeaderInfo_Channel> = ({
  channel
}) => {
  return (
    <>
      <header className={styles["channel-header"]}>
        <div className={styles["container"]}>
          <h1 className={styles["title"]}>
            {channel.info.title_display != undefined ? channel.info.title_display : channel.info.title}
          </h1>
          <p className={styles["summary"]}>{channel.info.summary}</p>
        </div>
      </header>
    </>
  );
};
