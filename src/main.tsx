import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider 
    reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
    scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
        nonce: undefined,
    }}>
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);