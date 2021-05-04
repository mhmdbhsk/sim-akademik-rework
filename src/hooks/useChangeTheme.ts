import { useTheme } from '@material-ui/core';
import { useCallback, useContext } from 'react';
import { ThemeContext } from '@context';
import Cookies from 'js-cookie';

export const useChangeTheme = () => {
  const dispatch = useContext(ThemeContext);
  const theme = useTheme();

  const changeTheme = useCallback(() => {
    dispatch({
      type: 'changeColorMode',
      payload: theme.palette.mode === 'light' ? 'dark' : 'light',
    });
    Cookies.set(
      'colorMode',
      theme.palette.mode === 'light' ? 'dark' : 'light',
      {
        sameSite: 'None',
        secure: process.env.NODE_ENV === 'development' ? false : true,
      }
    );
  }, [theme.palette.mode, dispatch]);

  return changeTheme;
};
