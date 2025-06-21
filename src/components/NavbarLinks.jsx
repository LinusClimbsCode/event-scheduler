import { useContext } from "react"
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context";


const NavbarLinks = () => {
    const navigate = useNavigate()
    // has only a value when there is a logged in user
    const { user, setUser } = useContext(AuthContext)

    // deletes user and local storage
    const onSignOut = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    }

    return (
        <>
        <li><Link to="/">Home</Link></li>
        {user && (<li><Link to="/profile">Profile</Link></li>)}
        {!user && (<li><Link to="/signin">Sign in</Link></li>)}
        {!user && (<li><Link to="/signup">Sign up</Link></li>)}
        <li><Link to="/events">Events</Link></li>
        {user && (<li><Link to="/create">Create event</Link></li>)}
        {user && (<button onClick={onSignOut} className="btn btn-link p-0 m-0 text-left">Sign Out</button>)}
        </>
    )
}

export default NavbarLinks