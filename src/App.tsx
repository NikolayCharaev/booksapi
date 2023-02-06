import { Box, Container } from '@mui/material';
import { useAppSelector } from './hooks/hooks';
import CardItem from './components/Card/CardItem';
import Modal from './components/Modal/Modal';

function App() {
  const items = useAppSelector((state) => state.bookSlice.items);
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
        {!items.length && <Modal />}
        {items.length > 0 ? items.map((item: any) => (
          <CardItem card={item.volumeInfo} />
        )) : ''}
      </Container>
    </Box>
  );
}

export default App;
