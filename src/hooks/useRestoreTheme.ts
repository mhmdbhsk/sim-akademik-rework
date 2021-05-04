import { useTheme } from '@material-ui/core';
import { useCallback, useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import Cookies from 'js-cookie';

export const useRestoreTheme = () => {
  const dispatch = useContext(ThemeContext);
  const theme = useTheme();
  const colorMode = Cookies.get('colorMode');

  const restoreTheme = useCallback(() => {
    dispatch({
      type: 'changeColorMode',
      payload: colorMode,
    });
  }, [theme.palette.mode, dispatch]);

  return restoreTheme;
};
