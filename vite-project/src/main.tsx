import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import { msalConfig } from './authConfig.ts'


const msalInstance = new PublicClientApplication(msalConfig);
msalInstance.initialize();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

