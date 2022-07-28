// import dependencies
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import AutoDismissAlert from './components'
import RequireAuth from './components/shared/RequireAuth'

function App() {
  return (
    <div className="App">
      <h1>MTG Deckbuilder ^_^</h1>
    </div>
  );
}

export default App;
