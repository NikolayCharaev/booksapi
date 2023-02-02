import React, { FC } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { BookCardProps } from '../types/types';

interface CardProps {
  card: BookCardProps;
}

const Card: FC<CardProps> = ({ card }) => {
  const items = useAppSelector((state) => state.bookSlice.items);
  //   const loading = useAppSelector((state) => state.bookSlice.loading);
  return (
    <div className="max-w-md  w-1/4 max-h-72">
      <div
        className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={card.imageLinks.thumbnail}
          alt="#"
        />
        <div className="flex flex-col justify-between p-4 leading-normal h-56">
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-scroll h-96">
            {card.description.slice(0,100)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
