import { Container, Paper, useTheme } from '@material-ui/core';
import { ColorAccentToggle, ColorModeToggle } from '@components';

export default function Home() {
  const theme = useTheme();

  console.log(theme.palette);

  return (
    <Container maxWidth="md">
      <h1>Material UI</h1>
      <ColorModeToggle />
      <ColorAccentToggle />
      <Paper sx={{ padding: 16 }}>
        <h1>{theme.palette.mode === 'dark' ? 'Dark' : 'Light'}</h1>
      </Paper>
    </Container>
  );
}
