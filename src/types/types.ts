export interface ISearch {
  value: string;
}

export interface IBook {
  items: [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  bookLoading: string
  item: []
}

export interface BookCardPropsImages {
  smallThumbnail: string;
  thumbnail: string;
}
export interface SearchInfoBook {
  textSnippet: string;
}

export interface BookCardProps {
    language: string;
    title: string;
    publishedDate: string;
    categories: [];
    previewLink: string;
    authors: [];
    description: string;
    imageLinks: BookCardPropsImages;
    searchInfo: SearchInfoBook;
}
