import React, { FC, PropsWithChildren, useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { BookCardProps } from '../../types/types';
import { Transition } from 'react-transition-group';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Container,
  Box,
  CardActionArea,
} from '@mui/material';

import './cardStyle.scss';

interface CardProps {
  card?: BookCardProps;
  onClick?: () => void;
}

const CardItem = ({ card, onClick }: CardProps) => {
  const items = useAppSelector((state) => state.bookSlice.items);

  useEffect(() => {
    if (items.length > 0) {
      setTimeout(() => {
        setCardVisible(true);
      }, 1000);
    }
  });

  const [cardVisible, setCardVisible] = useState(false);
  return (
    <Transition in={cardVisible} timeout={1000} mountOnEnter unmountOnExit>
      {(state) => (
        <Box
          className={`card ${state}`}
          onClick={onClick}
          sx={{
            display: 'flex',
          }}>
          <Card sx={{ maxWidth: 270, minWidth: '270px' }}>
            <CardActionArea sx={{ height: '100%' }}>
              <CardMedia
                sx={{ objectFit: 'cover', width: '100%' }}
                component="img"
                height="220"
                image={card?.imageLinks.thumbnail}
                alt="#"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '15px' }}>
                  {card?.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ overflow: 'scroll', height: '150px' }}>
                  {card?.description ? card?.description.slice(0, 150) : 'not description :('}...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      )}
    </Transition>
  );
};

export default CardItem;
