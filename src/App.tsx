import { useState, useEffect } from 'react';
import { Box, Container, Button } from '@mui/material';

import CardItem from './components/Card/CardItem';
import Modal from './components/Modal/Modal';

import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { useAppSelector } from './hooks/hooks';

import { fetchBook } from './redux/slices/bookSlice';

import * as style from './styles/appStyles';

import BookItem from './components/Book/BookItem';
import { BookCardProps } from './types/types';

import { setModalVisible } from './redux/slices/bookSlice';



function App() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useAppSelector((state) => state.bookSlice.items);

  const bookLoading = useAppSelector((state) => state.bookSlice.bookLoading);
  const book = useAppSelector((state) => state.bookSlice.item);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      setTimeout(() => {
        setCardVisible(true);
      }, 1000);
    }
  }, []);

  return (
    <Box sx={style.appStyle}>
      <Container maxWidth="xl" sx={style.appContainerStyle}>
        <Modal />
        <Box sx={style.appBoxStyle}>
          {items.length > 0 ? (
            <Button variant="contained" sx={{ position: 'absolute', top: '20px', right: '40px', zIndex: '100'}} onClick={() => dispatch(setModalVisible(true))}>
              новый поиск
            </Button>
          ) : ''}
          {items.length > 0
            ? items.map((item: any, key: number) => (
                <CardItem
                  onClick={() => {
                    dispatch(fetchBook(item.id));
                  }}
                  key={key}
                  card={item.volumeInfo}
                />
              ))
            : ''}
          <>{bookLoading === 'succeeded' && <BookItem book={book} />}</>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
