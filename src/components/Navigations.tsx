/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink, NavLinkProps } from "react-router-dom";
import { Page } from "../ObjectShapes";

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
interface Props {
  itemArray: Page[];
}

// 此处用来 map Nav 上的 items
const Nav_List: React.FC<Props> = ({ itemArray }) => {
  return (
    <ul>
      {itemArray.map((page: Page, i: number) => (
        <li key={`${page}${i}`}>
          <NavLink2Top to={`/${page.info.path}`}>{page.info.title}</NavLink2Top>
        </li>
      ))}
    </ul>
  );
};

const Nav_Top: React.FC<Props> = ({ itemArray }) => {
  return (
    <>
      <Nav_List itemArray={itemArray} />
    </>
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
