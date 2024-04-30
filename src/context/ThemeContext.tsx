import { ReactNode, createContext, useState, useMemo } from 'react';

interface ThemeContextType {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const themeFromLocaStorage = localStorage.getItem('isDarkTheme');
const preferences =
  themeFromLocaStorage === null
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : themeFromLocaStorage === 'true';

const ThemeContext = createContext<ThemeContextType>({
  isDark: preferences,
  setIsDark: () => {},
});

function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(preferences);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
