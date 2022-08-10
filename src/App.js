// import dependencies
// authorization and navigation dependencies
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import RequireAuth from './components/shared/RequireAuth'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

// component dependencies
import Home from './components/Home'
import Header from './components/shared/Header'
import CardSearch from './components/cards/CardSearch'
import CardIndex from './components/cards/CardIndex'

const App = () => {

  // create user and msgAlerts state variables for reference
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  // function to set user to null in the frontend on sign out
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

  const deleteAlert = (id) => {
    setMsgAlerts((prevState) => {
      return (prevState.filter((msg) => msg.id !== id))
    })
  }

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(() => {
      return (
        [{ heading, message, variant }]
      )
    })
  }

  return (
    <Fragment>
      <Header user={user} />
      <Routes>

        {/* Authorization-related routes */}
        <Route
          path='/'
          element={
            <Home 
              msgAlert={msgAlert}
              user={user}
            />
          }
        />
        <Route
          path='/sign-up' 
          element={
            <SignUp 
              msgAlert={msgAlert}
              setUser={setUser}
            />
          }
        />
        <Route 
          path='/sign-in'
          element={
            <SignIn 
              msgAlert={msgAlert}
              setUser={setUser}
            />
          }
        />
        <Route 
          path='/sign-out'
          element={
            <RequireAuth user={user}>
              <SignOut 
                msgAlert={msgAlert}
                clearUser={clearUser}
                user={user}
              />
            </RequireAuth>
          }
        />
        <Route 
          path='/change-password'
          element={
            <RequireAuth>
              <ChangePassword 
                msgAlert={msgAlert}
                user={user}
              />
            </RequireAuth>
          }
        />

        {/* Routes for main site components */}
        <Route 
          path='/cards/search'
          element={
            <RequireAuth user={user}>
              <CardSearch 
                msgAlert={msgAlert}
                user={user}
              />
            </RequireAuth>
          }
        />
        <Route 
          path="/cards/results"
          element={
            <RequireAuth user={user}>
              <CardIndex 
                msgAlert={msgAlert}
              />
            </RequireAuth>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
