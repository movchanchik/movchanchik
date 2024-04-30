import stylex from '@stylexjs/stylex';
import { colors } from './variables.stylex';

export const basic = stylex.create({
  switch: {
    width: '54px',
    height: '24px',
    padding: '3px',
    borderRadius: '12px',
    position: 'relative',
    boxSizing: 'border-box',
    zIndex: '1',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  switchOff: {
    backgroundColor: '#c7c7c7',
  },
  switchOn: {
    backgroundColor: '#9596dc',
  },
  toggle: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    position: 'absolute',
    zIndex: '2',
    display: 'block',
  },
  toggleOff: {
    backgroundColor: '#9596dc',
    left: '3px',
  },
  toggleOn: {
    backgroundColor: colors.white,
    left: '33px',
  },
});
