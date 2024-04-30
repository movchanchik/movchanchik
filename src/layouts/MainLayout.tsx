import { Outlet } from 'react-router-dom';
import { layout, layoutLight, layoutDark } from '../styleX/layout.stylex';
import stylex from '@stylexjs/stylex';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      {...stylex.props(
        layout['wide-container'],
        isDark ? layoutDark['wide-container'] : layoutLight['wide-container']
      )}
    >
      <Header />
      <div {...stylex.props(layout.container)}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
