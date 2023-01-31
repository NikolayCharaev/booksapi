export interface ISearch {
  value: string;
}



export interface IBook {
    items: [];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  }