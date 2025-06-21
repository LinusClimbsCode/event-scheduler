import Logo from '../assets/linuslinusLogoBK.svg';
import burgerMenu from '../assets/burger-menu-right-svgrepo-com.svg';
import NavbarLinks from "./NavbarLinks.jsx"
import { Link } from "react-router"
import { useContext } from "react"
import { AuthContext } from '../context/AuthProvider.jsx';

const Navbar = () => {
  const { user } = useContext(AuthContext) 

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to='/' className='btn btn-ghost' >
      <img src={Logo} alt="Logo" width="76" height="76" />
    </Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {(!user) ? (<img src={burgerMenu} alt="Logo" width="76" height="76" />) : (<img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />)}
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <NavbarLinks />
      </ul>
    </div>
  </div>
</div>
    )
}

export default Navbar;