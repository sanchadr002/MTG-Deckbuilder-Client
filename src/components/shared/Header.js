import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import "./styles.css"

const linkStyle = {
    color: "black",
    textDecoration: "none",
    marginLeft: "10px"
}

const authenticatedOptions = (
    <>
        <Nav.Link>
            <Link to={'/decks'} style={linkStyle}>My Decks</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to={'/cards'} style={linkStyle}>Card Collection</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to={'/new-deck'} style={linkStyle}>New Deck</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to='change-password' style={linkStyle}>
                Change Password
            </Link>
        </Nav.Link>
        <Nav.Link>
            <Link to='sign-out' style={linkStyle}>
                Sign Out
            </Link>
        </Nav.Link>
    </>
)

const unauthenticatedOptions = (
    <>
        <Nav.Link>
            <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Link>
    </>
)

const alwaysOptions = (
    <>
        <Nav.Link>
            <Link to='/about' style={linkStyle}>About</Link>
        </Nav.Link>
    </>
)

const Header = ({ user }) => (
    <Navbar
        style={{
            backgroundColor: "rgb(80, 200, 70)",
            padding: "0px, 0px, 0px, 20px"
        }}
        variant="dark" 
        expand="md">
            <Navbar.Brand>
                <Link to='/' style={linkStyle}>Deckbuildr</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    { user && (
                        <span className='navbar-text mr-2'>Welcome, {user.email}</span>
                    )}
                    {alwaysOptions}
                    {user ? authenticatedOptions : unauthenticatedOptions}
                </Nav>
            </Navbar.Collapse>
    </Navbar>
)

export default Header