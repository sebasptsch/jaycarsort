import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactIndexedDB from 'react-indexed-db';
import Nav from './components/Nav';
import { DBConfig } from './lib/DBConfig';
import Home from './pages/Home';
import './styles.scss';

library.add(fas);

ReactIndexedDB.initDB(DBConfig);

function App() {
  return (
    <div className="container">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
