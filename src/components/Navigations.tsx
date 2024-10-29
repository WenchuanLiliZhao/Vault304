/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink, NavLinkProps } from "react-router-dom";
import { Channel } from "../ObjectShapes";
import { DateFormatter, GetTodayDateArray } from "./Date";
import Channels from "../docs/pages/channels/_Toc";

// ============================
// 首先，我需要在这里处理一下 NavLink 的页面滚动问题
// ============================
interface NavLink2TopProps extends NavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink2Top: React.FC<NavLink2TopProps> = ({
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
// i want to set a const

// such that
interface Props {
  items: {[key: string]: Channel};
}

// 此处用来 map Nav 上的 items
const Nav_List: React.FC<Props> = () => {
  return (
    <ul>
      {Object.values(Channels).map((page: Channel, i: number) => (
        <li key={`${page}${i}`}>
          <NavLink2Top to={`/${page.info.path}`}>{page.info.title}</NavLink2Top>
        </li>
      ))}
    </ul>
  );
};

const Nav_Top: React.FC<Props> = ({ items }) => {
  return (
    <nav>
      <DateFormatter date={GetTodayDateArray()} />
      <Nav_List items={items} />
    </nav>
  );
};

export {
  // 处理页面滚动
  NavLink2Top,

  // 基本列表
  Nav_List,

  // Nav 的各种 variants
  Nav_Top,
};
