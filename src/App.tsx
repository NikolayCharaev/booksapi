import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { useAppSelector } from './hooks/hooks';
import { Transition } from 'react-transition-group';
import CardItem from './components/Card/CardItem';
import Modal from './components/Modal/Modal';

function App() {
  const items = useAppSelector((state) => state.bookSlice.items);

  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      setTimeout(() => {
        setCardVisible(true);
      }, 1000);
    }
  });

  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://images.wallpaperscraft.ru/image/single/kniga_girlianda_svet_134006_1920x1080.jpg)',
        objectFit: 'cover',

        width: '100%',
        height: '100vh',
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '18px',
      }}>
      <Container maxWidth="xl">
        {!items.length && <Modal />}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            paddingTop: '50px',
            justifyContent: 'center',
          }}>
          {items.length > 0 ? items.map((item: any) => <CardItem card={item.volumeInfo} />) : ''}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
