import { Stack, useTheme, Paper } from '@material-ui/core';
import { useChangeAccent } from '@hooks';
import { HiCheckCircle } from 'react-icons/hi';
import Cookies from 'js-cookie';

const colorAccent = [
  {
    id: 0,
    name: 'black',
    color: '#000',
    payload: {
      primary: {
        main: '#000',
        dark: '#000',
        light: '#000',
      },
      secondary: {
        main: '#000',
        dark: '#000',
        light: '#000',
      },
    },
  },
  {
    id: 1,
    name: 'orange',
    color: '#ff5722',
    payload: {
      primary: {
        main: '#ff5722',
        dark: '#b23c17',
        light: '#ff784e',
      },
      secondary: {
        main: '#ff3d00',
        dark: '#b22a00',
        light: '#ff6333',
      },
    },
  },
];

const ColorAccentToggle = () => {
  const changeAccent = useChangeAccent();
  const selectedAccent =
    Cookies.get('colorAccent') && JSON.parse(Cookies.get('colorAccent'));
  const theme = useTheme();

  return (
    <div>
      <Stack direction="row" spacing={2}>
        {colorAccent.map((item) => (
          <Paper
            sx={{
              bgcolor: item.color,
              width: 50,
              height: 50,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={item.id}
            onClick={() => changeAccent(item)}
          >
            {selectedAccent?.id === item.id && (
              <HiCheckCircle size={32} color="#fff" />
            )}
          </Paper>
        ))}
      </Stack>
    </div>
  );
};

export default ColorAccentToggle;
