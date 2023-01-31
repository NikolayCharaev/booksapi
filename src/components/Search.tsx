import React, { FC, useState } from 'react';
import { ISearch } from '../types/types';


import axios from 'axios'

import { fetchBook } from '../redux/slices/bookSlice';
import { useSelector, useDispatch,TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';




const Search: FC = () => {
    const [value,setValue] = useState('')
    const dispatch = useDispatch<AppDispatch>()

    // const items :  TypedUseSelectorHook<RootState> = useSelector(state => state.bookSlice.items)

    // console.log(items)

    const items: TypedUseSelectorHook<RootState> = useSelector (state => { 
        console.log(state)
    })


  return (
    <div className="max-w-xl text-white mx-auto h-screen my-auto grid content-center">
      { <form>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              dispatch(fetchBook(value))
              setValue('');
            }}
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </form>}
    </div>
  );
};

export default Search;
