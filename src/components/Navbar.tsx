import { Link } from "react-router-dom";

//TODO: fix collapse button not working
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 h1 fw-bold" to="/mySite/">
          Aiden
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapse"
        >
          <div className="navbar-nav fw-semibold">
            <Link className="nav-link" to="/mySite/">
              Home
            </Link>
            <Link className="nav-link" to="/mySite/about">
              About
            </Link>
            <Link className="nav-link" to="/mySite/resume">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
