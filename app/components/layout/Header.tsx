import {
  Link,
  NavLink,
} from "@remix-run/react";
import LinkContactUs from "../ui/LinkContactUs";

import data from "../../assets/data/data.json";
const SOCIAL = data.SOCIAL;

function Header() {
  return (
    <header>
      <h1 className="h1-headline"><Link to="/work"><span className="visually-hidden">Artwork by </span>Seanne Buoy</Link></h1>
      <nav className="mainnav" aria-label="Main Menu">
        <input className="mainmenu-btn" type="checkbox" id="mainmenu-btn" name="mainmenu-btn" />
        <label className="mainmenu-icon" htmlFor="mainmenu-btn" tabIndex="0"><span className="navicon"></span></label>
        <ul className="mainmenu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/work">Work</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><LinkContactUs social={SOCIAL} text={"Contact"} /></li> 
        </ul>
      </nav>
    </header>
  )
}

export default Header;