import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto";
import "./styles/index.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store} >
    <AuthProvider>
      <CssBaseline />
      <App />
    </AuthProvider>
   </Provider>
  </React.StrictMode>
)
