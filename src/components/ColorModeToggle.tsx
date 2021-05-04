import { Switch, useTheme } from '@material-ui/core';
import { useChangeTheme } from '@hooks';

const ColorModeToggle = ({ ...rest }) => {
  const changeTheme = useChangeTheme();
  const theme = useTheme();

  return (
    <div>
      <Switch
        {...rest}
        onChange={() => changeTheme()}
        checked={theme.palette.mode === 'dark'}
      />
    </div>
  );
};

export default ColorModeToggle;
