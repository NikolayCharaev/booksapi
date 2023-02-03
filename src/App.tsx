import { Box, Container } from '@mui/material';
import Test from './components/Test';

function App() {




  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://images.wallpaperscraft.ru/image/single/kniga_girlianda_svet_134006_1920x1080.jpg)',
        width: '100%',
        height: '100vh',
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '18px'
      }}>
      <Container maxWidth="xl">
        <Test/>
      </Container>
    </Box>
  );
}

export default App;
