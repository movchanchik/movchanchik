import stylex from '@stylexjs/stylex';
import { layout, layoutDark, layoutLight } from '../styleX/layout.stylex';
import ToggleSwitch from './basic/ToggleSwitch';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Logo from './basic/Logo';

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      {...stylex.props(
        layout.header,
        isDark ? layoutDark.header : layoutLight.header
      )}
    >
      <Logo />
      <ToggleSwitch />
    </div>
  );
};
export default Header;
