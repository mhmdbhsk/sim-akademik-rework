import { useTheme } from '@material-ui/core';
import { useCallback, useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import Cookies from 'js-cookie';

export const useRestoreAccent = () => {
  const dispatch = useContext(ThemeContext);
  const theme = useTheme();
  const colorAccent = Cookies.get('colorAccent');

  const restoreAccent = useCallback(() => {
    dispatch({
      type: 'changeColorAccent',
      payload: JSON.parse(colorAccent),
    });
  }, [theme.palette.primary, theme.palette.secondary, dispatch]);

  return restoreAccent;
};
