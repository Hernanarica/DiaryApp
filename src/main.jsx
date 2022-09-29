import React from 'react'
import ReactDOM from 'react-dom/client'
import { StateProvider, RouterProvider } from "./providers";
import { App } from "./App";

import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </StateProvider>
  </React.StrictMode>
)