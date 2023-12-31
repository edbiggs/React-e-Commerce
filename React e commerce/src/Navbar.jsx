import React from 'react'

const Navbar = (props) => {
  if (props.user != props.defaultState) {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">e-Commerce</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/logIn">Log in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/logout">Log out</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/signUp">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/products/">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/mycart">Cart</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <h5 className="welcome" aria-disabled="true">Welcome!</h5>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    )
  }

  else {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">eeCommerce</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/logIn">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/signUp">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/products">Products</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
              </li>
            </ul>

          </div>
        </div>
      </nav>
    )
  }

}

export default Navbar