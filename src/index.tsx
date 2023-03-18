import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Onboarding} from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Scene} from "./components/Scene";
import {Select} from "./components/Select";
import {Home} from "./components/Home";
import {Tutorial} from "./components/Tutorial";
import {Tutorial_1} from "./components/Tutorial_1";
import {Tutorial_2} from "./components/Tutorial_2";
import {Tutorial_3} from "./components/Tutorial_3";
import {Credits} from "./components/Credits";
import { Tutorial_last } from './components/Tutorial_last';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/game",
    element: <Scene/>,
  },
  {
    path: "/select",
    element: <Select/>,
  },
  {
    path: "/",
    element: <Scene/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/tutorial",
    element: <Tutorial/>,
  },
  {
    path: "/tutorial_1",
    element: <Tutorial_1/>,
  },
  {
    path: "/tutorial_2",
    element: <Tutorial_2/>,
  },
  {
    path: "/tutorial_3",
    element: <Tutorial_3/>,
  },
  {
    path: "/credits",
    element: <Credits/>,
  },
  {
    path: "/Tutorial_last",
    element: <Tutorial_last/>,
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
