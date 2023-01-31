import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBook } from '../../types/types';
import axios from '../../axios';

export const fetchBook = createAsyncThunk('book', async (params:string) => {
  const response = await axios.get(`${params}`);
  return response.data.items
});

const initialState = {
  items: [],
  loading: 'idle',
} as IBook;

export const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state,action) => { 
        state.loading = 'pending';
        state.items = []
    });
    builder.addCase(fetchBook.fulfilled, (state,action) => { 
        state.loading = 'succeeded';
        state.items = action.payload
    });
    builder.addCase(fetchBook.rejected, (state,action) => { 
        state.loading = 'failed';
        state.items = []
    });
  },
});

export const {} = BookSlice.actions;
export default BookSlice.reducer;
