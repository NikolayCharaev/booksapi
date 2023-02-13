import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { Box, Typography, TextField, Button } from '@mui/material';
import { fetchBooks } from '../../redux/slices/bookSlice';
import { useAppSelector } from '../../hooks/hooks';
import { setModalVisible } from '../../redux/slices/bookSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { modalCenter } from '../../styles/appStyles';

import './modalStyle.scss';

enum ModalBoxShadow {}

const Modal = () => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const items = useAppSelector((state) => state.bookSlice.items);
  const modalVisible = useAppSelector((state) => state.bookSlice.modalVisible);
  const dispatch = useDispatch<AppDispatch>();
  const loadingState = useAppSelector((state) => state.bookSlice.loading);

  const modalVisibleStart = () => {
    return setTimeout(() => dispatch(setModalVisible(true)), 500);
  };

  useEffect(() => {
    modalVisibleStart();
  }, []);

  function hideModalVisible() {
    setLoading(true);
    setTimeout(() => {
      dispatch(setModalVisible(false));
    }, 1000);
  }

  function handleSearch(e: any) {
    if ((e.key === 'Enter' && value.length > 0)) {
      dispatch(fetchBooks(value));
      dispatch(setModalVisible(false))
    }
  }

  return (
    <Box
      // sx={{
      //   display: items.length > 0 ? 'none' : 'flex',
      //   width: '78vw',
      //   height: '100vh',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      // }}

      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '100',
      }}>
      <Transition in={modalVisible} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <Box className={`modal ${state}`} sx={{ padding: '20px', position: 'relative' }}>
            <Typography
              variant="h5"
              sx={{ color: 'black', textAlign: 'center', marginTop: '20px' }}>
              Читай и наслаждайся :)
            </Typography>
            {items.length > 0 ? (
              <Button
                variant="contained"
                sx={{ position: 'absolute', top: '10px', right: '10px' }}
                onClick={() => dispatch(setModalVisible(false))}>
                закрыть
              </Button>
            ) : (
              ''
            )}
            <Box sx={{ marginTop: '120px', display: 'flex', justifyContent: 'center' }}>
              <TextField
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setValue(e.target.value);
                }}
                value={value}
                id="outlined-basic"
                label="поиск книги..."
                variant="outlined"
                sx={{ width: '80%' }}
                onKeyPress={handleSearch}
              />
              <Button
                disabled={value.length <= 0}
                variant="contained"
                onClick={() => {
                  dispatch(fetchBooks(value));
                  hideModalVisible();
                  setValue('');
                }}
                sx={{ padding: '14px', marginLeft: '5px' }}>
                найти
              </Button>
            </Box>
            <Button variant="outlined" sx={{ marginLeft: '8px', marginTop: '5px' }}>
              расширенный поиск
            </Button>
            {loading && (
              <Typography
                className={`${state}`}
                sx={{
                  color: 'black',
                  textAlign: 'center',
                  marginTop: '20px',
                }}>
                {loadingState === 'failed' ? 'произошла ошибка' : ''}
              </Typography>
            )}
          </Box>
        )}
      </Transition>
    </Box>
  );
};

export default Modal;
