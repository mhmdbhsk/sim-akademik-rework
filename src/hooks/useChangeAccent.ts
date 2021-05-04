import { useTheme } from '@material-ui/core';
import { useCallback, useContext } from 'react';
import { ThemeContext } from '@context';
import Cookies from 'js-cookie';

interface PayloadProps {
  id: number;
  name: String;
  color: String;
  payload: {
    primary: {
      main: String;
      dark: String;
      light: String;
    };
    secondary: {
      main: String;
      dark: String;
      light: String;
    };
  };
}

export const useChangeAccent = () => {
  const dispatch = useContext(ThemeContext);
  const theme = useTheme();

  const changeAccent = useCallback(
    (payload: PayloadProps) => {
      dispatch({
        type: 'changeColorAccent',
        payload: payload.payload,
      });
      Cookies.set('colorAccent', payload, {
        sameSite: 'None',
        secure: process.env.NODE_ENV === 'development' ? false : true,
      });
    },
    [theme.palette.primary, theme.palette.secondary, dispatch]
  );

  return changeAccent;
};
