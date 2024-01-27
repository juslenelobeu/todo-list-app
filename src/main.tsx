import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { DataListProvider } from './context/DataListContext.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataListProvider>
      <App />
    </DataListProvider>
  </React.StrictMode>
);
