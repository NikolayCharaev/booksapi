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
        backgroundSize: 'cover',
        paddingBottom: '50px',

        width: '100%',
        height: '100vh',
        // minHeight: '100vh',
        overflow: 'scroll',
        color: 'white',
        backgroundRepeat: 'no-repeat',
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
          {items.length > 0
            ? items.map((item: any, key: number) => (
                <CardItem
                  onClick={() => {
                    console.log(item.id);
                  }}
                  key={key}
                  card={item.volumeInfo}
                />
              ))
            : ''}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
