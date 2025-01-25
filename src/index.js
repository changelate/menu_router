import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Menu/Layout';
import Taxi from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/Home',
          element: <HomePage/>
        },
        {
          path: '/Taxi',
          element: <TimeAttackPage/>
        },
        {
          path: '/Time_Attack',
          element: <DriftPage/>
        },{
          path: '/Forza_Karting',
          element: <ForzaPage/>
        },


      ]

    }



  ]
)

root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
