import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider, Route, Link  } from 'react-router-dom';
import Home from './Home';
import ProjectHome from './ProjectHome';

const router = createHashRouter([
  {
    path: '/esto-es-absoluto',
    element: <App />,
    children: [
      {
        path: '',
        element: (<h6>Esto es defaultRoute</h6>)
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'contacto',
        element: (<h1>Holi mundi</h1>)
      },
      {
        path: ':pId',
        element: <ProjectHome />
      }
    ]
  },
  {
    path: '/admin',
    element: (<div>Esto es otra ruta totalemnte distinta</div>)
  }
  
])



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider  router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
