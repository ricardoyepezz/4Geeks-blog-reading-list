import React from "react";
import { Link } from "react-router-dom";
import starWarsIcon from "../../img/star-wars-icon.png";

export const Navbar = () => {
	return (
<nav className="navbar-expand-lg navbar navbar-dark bg-dark">
  <div className="container-fluid">
  <Link to="/">
  <span className="navbar-brand">
      <img src={starWarsIcon} alt="" width="44" height="40" className="d-inline-block align-text-top"/>
    </span>
	</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
	  <Link to="/">
        <li className="nav-item">
        <span className="nav-link active">Home</span>
        </li>
		</Link>
		<Link to="/people">
        <li className="nav-item">
          <span className="nav-link">People</span>
        </li>
		</Link>
		<Link to="/planets">

		<li className="nav-item">
          <span className="nav-link">Planets</span>
        </li>
		</Link>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
		

	);
};


