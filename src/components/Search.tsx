import React, { FC, useState } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { fetchBook } from '../redux/slices/bookSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

const Search: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const loading = useAppSelector((state) => state.bookSlice.loading);

  return (
    <div>
        
    </div>
  );
};

export default Search;
