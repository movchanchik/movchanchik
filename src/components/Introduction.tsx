import stylex from '@stylexjs/stylex';
import { layout, layoutDark, layoutLight } from '../styleX/layout.stylex';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const Introduction = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div>
      <div>
        <p
          {...stylex.props(
            layout.text,
            isDark ? layoutDark.text : layoutLight.text
          )}
        >
          Hi everyone! I happy to see you here!
        </p>
      </div>
    </div>
  );
};
export default Introduction;
