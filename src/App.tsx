import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { StrictMode } from 'react';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
