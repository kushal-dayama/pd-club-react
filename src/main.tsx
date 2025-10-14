import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
// import '@fontsource/jost/500.css';
// import '@fontsource/jost/600.css';
// import '@fontsource/jost/700.css';
// import '@fontsource/open-sans/400.css';
// import '@fontsource/open-sans/500.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);