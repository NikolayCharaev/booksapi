import Card from './components/Card';
import Search from './components/Search';

import { useAppSelector } from './hooks/hooks';

function App() {
  const loading = useAppSelector((state) => state.bookSlice.loading);
  const items = useAppSelector((state) => state.bookSlice.items);
  // const {volumeInfo} = items
  // console.log(items.volumeInfo)
  return (
    <div className="xl:container mx-auto px-5   ">
      <Search />
      <div className="xs:container mx-auto h-screen flex flex-wrap justify-around gap-0 items-center">
        {items.map((elem) => {
          const { volumeInfo } = elem;
          return <Card card={volumeInfo} />;
        })}
      </div>
    </div>
  );
}

export default App;
