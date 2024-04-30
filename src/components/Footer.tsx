import stylex from '@stylexjs/stylex';
import { layout, layoutDark, layoutLight } from '../styleX/layout.stylex';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      {...stylex.props(
        layout.footer,
        isDark ? layoutDark.footer : layoutLight.footer
      )}
    >
      <div {...stylex.props(layout.copyright)}>
        © {new Date().getFullYear()} Movchanchik
      </div>
    </div>
  );
};
export default Footer;
