import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { Box, Typography, TextField, Button } from '@mui/material';
import { fetchBook } from '../../redux/slices/bookSlice';
import { useAppSelector } from '../../hooks/hooks';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

import './modalStyle.scss';
const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useDispatch<AppDispatch>();


  const loadingState = useAppSelector((state) => state.bookSlice.loading);

  useEffect(() => {
    setTimeout(() => setModalVisible(true), 500);
    // setTimeout(() => setModalVisible(false), 5000);
  }, []);

  function hideModalVisible() {
    setLoading(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1000);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '78vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Transition in={modalVisible} timeout={1000} mountOnEnter unmountOnExit>
        {(state) => (
          <Box className={`modal ${state}`}>
            <Typography
              variant="h5"
              sx={{ color: 'black', textAlign: 'center', marginTop: '20px' }}>
              Читай и наслаждайся :)
            </Typography>
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
              />
              <Button
                disabled={value.length <= 0}
                variant="contained"
                onClick={() => {
                  dispatch(fetchBook(value));
                  hideModalVisible();
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
                {loadingState === 'failed' ? 'произошла ошибка' : 'загрузка данных...'}
              </Typography>
            )}
          </Box>
        )}
      </Transition>
    </Box>
  );
};

export default Modal;
