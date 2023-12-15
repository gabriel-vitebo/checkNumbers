import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import theme from './styles/theme.ts'
import GlobalStyles from "./styles/global"
import { ThemeProvider } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
