import * as stylex from '@stylexjs/stylex';

const toggleSwithOn = stylex.keyframes({
  '0%': { left: '3px' },
  '50%': { left: '15px' },
  '100%': { left: '33px' },
});

const toggleSwithOff = stylex.keyframes({
  '0%': { left: '33px' },
  '50%': { left: '15px' },
  '100%': { left: '0px' },
});

export const animations = stylex.create({
  toggleSwithOn: {
    animationName: toggleSwithOn,
    animationDuration: '0.2s',
    animationTimingFunction: 'linear',
  },
  toggleSwithOff: {
    animationName: toggleSwithOff,
    animationDuration: '0.2s',
    animationTimingFunction: 'linear',
  },
});
