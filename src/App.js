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

const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

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
        <Route
          path='/'
          element={
            <Home 
              msgAlert={msgAlert}
              user={user}
            />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
