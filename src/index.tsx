import ReactDOM from 'react-dom/client';
import App from './App';
import './output.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <div
      className="w-full h-full min-h-screen bg-cover bg-center "
      style={{
        backgroundImage:
          'url("https://images.wallpaperscraft.ru/image/single/kniga_iabloko_frukt_197152_1920x1080.jpg")',
      }}>
      <App />
    </div>
  </Provider>,
);
