/* eslint-disable react-refresh/only-export-components */
import styles from "./Navigations.module.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink, NavLinkProps } from "react-router-dom";
import { Channel } from "../ObjectShapes/PageShapes";
import { DateFormatter, GetTodayDateArray } from "../Functions/Date";
import Channels from "../../docs/pages/channels/_Toc";
import React from "react";
import { SiteInfo } from "../../SiteInfo";

// ============================
// 首先，我需要在这里处理一下 NavLink 的页面滚动问题
// ============================
interface NavLink2TopProps extends NavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const NavLink2Top: React.FC<NavLink2TopProps> = ({
  to,
  className,
  children,
  ...rest
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <NavLink to={to} className={className} {...rest}>
      {children}
    </NavLink>
  );
};

// ============================
// 从这个文件开始创建 components
// ============================

const [year, month, day] = [
  DateFormatter(GetTodayDateArray())[0],
  DateFormatter(GetTodayDateArray())[1],
  DateFormatter(GetTodayDateArray())[2],
];

function SecChannels() {
  return (
    <div className={styles["sec-channels"]}>
      {[Channels.About, Channels.Contact, Channels.FAQ].map(
        (channel: Channel, i: number) => (
          <React.Fragment key={`${channel}${i}`}>
            {i !== 0 ? "·" : ""}
            <a href={`/${channel.info.path}`} className={styles["sec-channel"]}>
              {channel.info.title}
            </a>
          </React.Fragment>
        )
      )}
    </div>
  );
}

export const Nav_Top: React.FC = () => {
  return (
    <nav className={styles["nav-top"]}>
      <div className={styles["top-info"]}>
        <a href="" className={styles["date"]}>
          <span className={styles["day"]}>{day}</span>
          <span className={styles["month"]}>{month}</span>
          <span className={styles["year"]}>{year}</span>
        </a>
        <SecChannels />
      </div>
      <div className={styles["channel-list"]}>
        {[
          Channels.Home,
          Channels.Design,
          Channels.BrainWaves,
          Channels.Collections,
        ].map((channel: Channel, i: number) => (
          <NavLink2Top
            key={`${channel}${i}`}
            to={`/${channel.info.path}`}
            className={styles.channel}
          >
            <div className={styles["channel-title"]}>{channel.info.title}</div>
          </NavLink2Top>
        ))}
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className={styles["footer"]}>
        <div className={styles["container"]}>
          <div className={styles["copyright"]}>{SiteInfo.copyRight}</div>
          <SecChannels />
        </div>
      </footer>
    </>
  );
};
