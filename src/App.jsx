// import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './Router/Router';

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />;
    </div>
  );
}

export default App;