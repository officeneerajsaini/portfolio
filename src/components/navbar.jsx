import React from "react";


function Navbar(){
  return <div>
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary ">
      <div className="container-fluid">
        <li className="nav-item">
          <a className="navbar-brand ">Neeraj Saini</a>
        </li>

        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
          </li> <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="#aboutPage">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#certificatePage">Certificates</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#projectPage">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#contactPage">Contact me</a>
          </li>
        </ul>
      </div>
    </nav> */}
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand ml-10 text-green" href="#homePage">Neeraj Saini</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link mr-2" aria-current="page" href="#homePage">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-2 ml-2" href="#aboutPage">About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-2 ml-2" href="#certificatePage">Certificates</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-2 ml-2" href="#projectPage">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-10 ml-2" href="#contactPage">Contact me</a>
        </li>
      </ul>
    </div>
</nav>
  </div>;
}

export default Navbar;