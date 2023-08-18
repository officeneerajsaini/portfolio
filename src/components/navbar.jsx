import React from "react";

function Navbar() {
    return <div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
          <div className="container-fluid">
            <li className="nav-item">
              <a className="navbar-brand " href="#">Neeraj Saini</a>
            </li>

            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact me</a>
              </li>
            </ul>

          </div>
        </nav>
    </div>
    ;
}

export default Navbar ;