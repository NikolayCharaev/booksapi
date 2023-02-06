import React, { FC, PropsWithChildren } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { BookCardProps } from '../../types/types';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Container,
  CardActionArea,
} from '@mui/material';

interface CardProps {
  card?: BookCardProps;
}

const CardItem = ({ card }: CardProps) => {
  const items = useAppSelector((state) => state.bookSlice.items);
  console.log(card);
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
      }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={card?.imageLinks.thumbnail}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card?.description ? card?.description.slice(0, 100) : 'not description :('}...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default CardItem;
