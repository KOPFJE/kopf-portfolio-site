function Header(props) {
    return(
      <div>
        <header id="siteheader">
        <div class="navbar-container">
            <div id="logo" class="container">
              <a href="#maincontent">
                <h1>Lauri Niskanen</h1>
                <h2>Portfolio</h2>
              </a>
            </div>
              <ul class="menu-items">
                <li><a href="#maincontent">Home</a></li>
                <li><a href="#infocontainer">About Me</a></li>
              </ul>
          </div>
        </header>
      </div>
    );
  }
  export default Header;