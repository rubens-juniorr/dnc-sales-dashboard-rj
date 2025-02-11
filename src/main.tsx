import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import React from 'react'
import { AppThemeProvider } from './contexts/appThemeContext.tsx'
import { GlobalStyle } from './styles/globalStyle.ts'
import { Provider } from 'react-redux'
import store from './redux/index.ts'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <GlobalStyle />
        <App />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>
)
