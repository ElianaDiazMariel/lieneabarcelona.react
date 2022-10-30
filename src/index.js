import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCD5H47WptZUqisW-7BT01RWlzCQg-GPw4",
  authDomain: "lineabarcelona-70794.firebaseapp.com",
  projectId: "lineabarcelona-70794",
  storageBucket: "lineabarcelona-70794.appspot.com",
  messagingSenderId: "974399581652",
  appId: "1:974399581652:web:5e7f34145a07c9f1b9fa41"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

