import { useContext } from 'react';
import stylex from '@stylexjs/stylex';
import { basic } from '../../styleX/general.stylex';
import { animations } from '../../styleX/animation.stylex';
import { ThemeContext } from '../../context/ThemeContext';

const ToggleSwitch = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const handleToggleChange = () => {
    setIsDark(!isDark);
    localStorage.setItem('isDarkTheme', String(!isDark));
  };
  return (
    <div
      onClick={handleToggleChange}
      {...stylex.props(basic.switch, isDark ? basic.switchOn : basic.switchOff)}
    >
      <div
        {...stylex.props(
          basic.toggle,
          isDark
            ? [basic.toggleOn, animations.toggleSwithOn]
            : [basic.toggleOff, animations.toggleSwithOff]
        )}
      ></div>
    </div>
  );
};
export default ToggleSwitch;
