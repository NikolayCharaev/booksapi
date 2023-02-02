import Card from './components/Card';
import Search from './components/Search';

import { useAppSelector } from './hooks/hooks';

function App() {
  const loading = useAppSelector((state) => state.bookSlice.loading);
  const items = useAppSelector((state) => state.bookSlice.items);
  // const {volumeInfo} = items
  // console.log(items.volumeInfo)
  return (
    <div className="xl:container mx-auto px-5 ">
      <Search />
      <div className="flex flex-wrap gap-5  justify-center  align-start">
        {items.map((elem) => {
          const { volumeInfo } = elem;
          return <Card card={volumeInfo} />;
        })}
      </div>
    </div>
  );
}

export default App;
