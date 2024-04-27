import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {Inicio} from './administrador/pages/Inicio.jsx'
import {Ciudades} from './administrador/pages/AutobusesForm.jsx'
import {Autobuses} from './administrador/pages/AutobusesForm.jsx'
import {ErrorPage}  from './pages/ErrorPage.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "adminInicio",
    element: <Inicio />
  },
  {
    path: "administradorCuidad",
    element: <Ciudades />,
  },
  {
    path: "administradorAutobus",
    element: <Autobuses />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
