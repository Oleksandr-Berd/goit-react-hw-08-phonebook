import React from 'react';
import css from './App.module.css';
import { AppBar } from './AppBar/AppBar';
import Phonebook from 'pages/Phonebook';
import Home from 'pages/Home';

export default function App() {
  return (
    <div className={css.container}>
      <AppBar />
      <Home />
      <Phonebook />
    </div>
  );
}
