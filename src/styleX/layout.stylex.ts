import stylex from '@stylexjs/stylex';
import { colors } from './variables.stylex';

export const layout = stylex.create({
  'wide-container': {
    minHeight: '100vh',
    paddingBottom: '2.5rem',
    position: 'relative',
    boxSizing: 'border-box',
  },
  container: {
    width: {
      default: '1200px',
      '@media all and (min-width: 1024px) and (max-width: 1280px)': '960px',
      '@media all and (min-width: 768px) and (max-width: 1023px)': '95%',
      '@media all and (max-width: 767px)': '90%',
    },
    marginInline: 'auto',
    padding: '24px',
    boxSizing: 'border-box',
  },
  header: {
    padding: '12px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  footer: {
    position: 'absolute',
    bottom: '0',
    height: '2.5rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyright: {
    fontSize: '11px',
    fontWeight: '300',
  },
  logo: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  text: {
    fontSize: '20px',
    fontWeight: '500',
    letterSpacing: '0.2px',
  },
});

export const layoutLight = stylex.create({
  'wide-container': {
    color: colors.primaryText,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    backgroundColor: 'rgb(234 236 237)',
    color: 'rgb(51 51 51 / 40%)',
  },
  footer: {
    backgroundColor: 'rgb(234 236 237)',
    color: 'rgb(51 51 51 / 40%)',
  },
  text: {
    color: 'black',
  },
});
export const layoutDark = stylex.create({
  'wide-container': {
    color: colors.primaryText,
    backgroundColor: colors.backgroundDark,
  },
  header: {
    backgroundColor: '#011220',
    color: 'white',
  },
  footer: {
    backgroundColor: '#011220',
    color: 'rgb(255 255 255 / 40%)',
  },
  text: {
    color: 'white',
  },
});
