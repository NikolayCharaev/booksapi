import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBook } from '../../types/types';
import axios from '../../axios';

export const fetchBooks = createAsyncThunk('books', async (params: string) => {
  const response = await axios.get(`?q=${params}`);
  return response.data.items;
});

export const fetchBook = createAsyncThunk('book', async (id: string) => {
  const response = await axios.get(`/${id}`);
  return response.data;
});

interface BookSliceProps {
  items: [];
  loading: string;
  item: [];
}

const initialState: BookSliceProps = {
  items: [],
  loading: 'idle',
  bookLoading: 'idle',
  item: [],
} as IBook;

export const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.loading = 'pending';
      state.items = [];
    });
    builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<[]>) => {
      state.loading = 'succeeded';
      state.items = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = 'failed';
      state.items = [];
    });

    builder.addCase(fetchBook.pending, (state, action) => {
      state.item = [];
    });
    builder.addCase(fetchBook.fulfilled, (state, action: PayloadAction<[]>) => {
      state.item = action.payload;
    });
    builder.addCase(fetchBook.rejected, (state, action) => {
      state.item = [];
    });
  },
});

export default BookSlice.reducer;
