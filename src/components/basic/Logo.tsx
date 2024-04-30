import stylex from '@stylexjs/stylex';
import { layout } from '../../styleX/layout.stylex';

const Logo = () => {
  return <span {...stylex.props(layout.logo)}>Movchanchik</span>;
};
export default Logo;
