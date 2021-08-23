import React from 'react'

function Layout() {
  return (
    <div className="w-full">
      <header role="banner">
        <nav className="">
          <div className="container mx-auto flex h-header font-robo">
            <a className="navbar-brand " href="index.html">Innova</a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse" id="navbarsExample05" style={{}}>
              <ul className="navbar-nav pl-md-5 ml-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="services.html" aria-expanded="false">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="portfolio.html">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  )
}

export default Layout
