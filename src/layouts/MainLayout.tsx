import { Outlet } from "react-router-dom";
import { layout } from "../styleX/layout.stylex";
import stylex from "@stylexjs/stylex";

const MainLayout = () => { 
  return <div {...stylex.props(layout.container)}>
    <Outlet />
  </div>
}
export default MainLayout;
