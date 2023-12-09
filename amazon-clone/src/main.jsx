import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import reducer, { initialState } from './reducer'
import { StateProvider } from './StateProvider'


const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
  </BrowserRouter>
)
