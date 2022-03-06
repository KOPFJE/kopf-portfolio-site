function Header(props) {
    return(
      <div>
          <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
              
          <ul class="menu__box">
            <li><a class="menu__item" href="/">Home</a></li>
          </ul>
        </div>
        <header id="siteheader">
          <div id="logo" class="container">
            <a href="/">
              <h1>Lauri Niskanen</h1>
              <h2>Portfolio</h2>
            </a>
          </div>
        </header>
      </div>
    );
  }
  export default Header;