import { createContext, useMemo, useReducer } from 'react';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  Theme,
} from '@material-ui/core';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

export const ThemeContext = createContext<any>(null);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const initialColor = {
    mode: 'light',
    primary: { main: '#000', light: '#000', dark: '#000' },
    secondary: { main: '#000', light: '#000', dark: '#000' },
  };

  const [themeOptions, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'changeColorMode':
        return {
          ...state,
          mode: action.payload,
        };
      case 'changeColorAccent':
        return {
          ...state,
          primary: action.payload?.primary,
          secondary: action.payload?.secondary,
        };
      default:
        return new Error();
    }
  }, initialColor);

  const memoizedTheme = useMemo(() => {
    return createMuiTheme({
      ...theme,
      palette: {
        mode: themeOptions.mode,
        primary: {
          main: themeOptions.primary?.main || initialColor.primary.main,
          dark: themeOptions.primary?.dark || initialColor.primary.dark,
          light: themeOptions.primary?.light || initialColor.primary.light,
        },
        secondary: {
          main: themeOptions.secondary?.main || initialColor.secondary.main,
          dark: themeOptions.secondary?.dark || initialColor.secondary.dark,
          light: themeOptions.secondary?.light || initialColor.secondary.light,
        },
      },
    });
  }, [theme, themeOptions.mode, themeOptions.primary, themeOptions.secondary]);

  return (
    <MuiThemeProvider theme={memoizedTheme}>
      <ThemeContext.Provider value={dispatch}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
