// import dependencies
import { Navigate } from 'react-router-dom'

// RequireAuth component navigates user to sign-in page when they attempt to
// access a page they don't have access to
export default function RequireAuth({ user, children }) {

    // if user doesn't exist, redirect them to sign-in
	return user !== null ? children : <Navigate to='/sign-in' replace />
}