import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { BookCardProps } from '../types/types';
import { SxProps } from '@mui/system';
import { styled } from '@mui/material/styles';


interface CardProps {
  card: BookCardProps;
}


const Card: FC<PropsWithChildren<CardProps>> = ({ card, children }) => {
  const items = useAppSelector((state) => state.bookSlice.items);
  return (
    <div >
    </div>
  );
};

export default Card;
