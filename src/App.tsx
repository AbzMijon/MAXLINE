import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ReactQueryProvider from './HOC/RQHOC';
import RootRouter from './Routes/RootRouter';

export default function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
    </ReactQueryProvider>
  );
}