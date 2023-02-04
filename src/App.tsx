import { Box, Container } from '@mui/material';

import Modal from './components/Modal/Modal'
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
        fontSize: '18px',
      }}>
      <Container maxWidth="xl">
      <Modal/>
      </Container>
    </Box>
  );
}

export default App;
