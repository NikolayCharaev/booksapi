import React, { FC } from 'react';
import {
  Box,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { BookCardProps } from '../../types/types';
import { useAppSelector } from '../../hooks/hooks';

import { closeBookItem } from '../../redux/slices/bookSlice';
import { useDispatch } from 'react-redux';

import { bookItemBox } from '../../styles/appStyles';

interface CardProps {
  book?: any;
  onClick?: () => void;
}

const minHeightBookBlock: string = '476px';

const BookItem: FC<CardProps> = ({ book }) => {
  const items = useAppSelector((state) => state.bookSlice.items);
  const dispatch = useDispatch();
  return (
    <Container maxWidth="md" sx={bookItemBox}>
      <Typography sx={{ textAlign: 'center', marginBottom: '50px' }} variant="h6">
        {book.title}
      </Typography>
      <Box sx={{ display: 'flex', minHeight: minHeightBookBlock }}>
        <Card sx={{ maxWidth: 270, minWidth: '270px' }}>
          <CardActionArea sx={{ height: '100%' }}>
            <CardMedia
              sx={{ objectFit: 'cover', width: '100%' }}
              component="img"
              height="220"
              image={book?.imageLinks.thumbnail}
              alt="#"
            />
            <CardContent>
              <Typography variant="h6">{book.authors}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                кол-во страниц:{' '}
                <Typography variant="h6" color={'green'} sx={{ marginLeft: '10px' }}>
                  {book.pageCount}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                язык:
                <Typography variant="h6" color={'green'} sx={{ marginLeft: '10px' }}>
                  {book.language.toUpperCase()}
                </Typography>
              </Box>

              {book.dimensions ? (
                <Box>
                  <Typography sx={{ textAlign: 'center' }} variant="h6">
                    Размеры книги
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    высота:
                    <Typography variant="h6" color={'green'} sx={{ marginLeft: '10px' }}>
                      {book.dimensions.height || 'нет данных'}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    ширина:
                    <Typography variant="h6" color={'green'} sx={{ marginLeft: '10px' }}>
                      {book.dimensions.width || 'нет данных'}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    толщина:
                    <Typography variant="h6" color={'green'} sx={{ marginLeft: '10px' }}>
                      {book.dimensions.thickness || 'нет данных'}
                    </Typography>
                  </Box>
                </Box>
              ) : (
                ''
              )}
            </CardContent>
          </CardActionArea>
        </Card>
        <Box sx={{ height: minHeightBookBlock, overflow: 'scroll' }}>
          <Typography variant="h6" color={'white'} sx={{ marginLeft: '10px', fontSize: '1.4rem' }}>
            {book.description
              ? new DOMParser().parseFromString(book.description, 'text/html').body.textContent
              : ''}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
        <Button variant="contained" href={book.previewLink} target="_blank">
          подробнее
        </Button>
        <Button variant="contained" onClick={() => dispatch(closeBookItem())}>
          закрыть
        </Button>
      </Box>
    </Container>
  );
};

export default BookItem;
