import React, { FC } from 'react';
import {
  Box,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import { BookCardProps } from '../../types/types';
import { useAppSelector } from '../../hooks/hooks';

import { bookItemBox } from '../../styles/appStyles';
import { text } from 'stream/consumers';

interface CardProps {
  book?: any;
  onClick?: () => void;
}

const minHeightBookBlock: string = '476px';

const BookItem: FC<CardProps> = ({ book }) => {
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
          <Typography variant="h6" color={'white'} sx={{ marginLeft: '10px' }}>
            {book.description ? new DOMParser().parseFromString(book.description,'text/html').body.textContent : ''}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BookItem;
