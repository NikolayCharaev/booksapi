import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from '../../axios';

import { BookCardProps } from '../../types/types';

export const fetchBooks = createAsyncThunk('books', async (params: string) => {
  const response = await axios.get(`?q=${params}`);
  return response.data.items;
});

export const fetchBook = createAsyncThunk('book', async (id: string) => {
  const response = await axios.get(`/${id}`);
  return response.data.volumeInfo;
});

interface BookSliceProps {
  items: [];
  loading: string;
  bookLoading: string;
  item: {};
}

const initialState: BookSliceProps = {
  items: [],
  loading: 'idle',
  bookLoading: 'idle',
  item: {},
};

export const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    closeBookItem: (state) => {
      state.bookLoading = 'pending';
      state.item = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = 'pending';
      state.items = [];
    });
    builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<[]>) => {
      state.loading = 'succeeded';
      state.items = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.loading = 'failed';
      state.items = [];
    });

    builder.addCase(fetchBook.pending, (state) => {
      state.bookLoading = 'pending';
      state.item = [];
    });
    builder.addCase(fetchBook.fulfilled, (state, action: PayloadAction<any>) => {
      state.bookLoading = 'succeeded';
      state.item = action.payload;
    });
    builder.addCase(fetchBook.rejected, (state) => {
      state.bookLoading = 'failed';
      state.item = [];
    });
  },
});
export const { closeBookItem } = BookSlice.actions;
export default BookSlice.reducer;
