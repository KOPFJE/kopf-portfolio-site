function Header() {
    return(
      <div>
      <header>
        <div class="container">
          <h1>Taajuus</h1>
        </div>
      </header>
      <nav>
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
              
          <ul class="menu__box">
              <li><a class="menu__item" href="/">Home</a></li>
              <li><a class="menu__item" href="/login">Login</a></li>
                  </ul>
              </div>
          </nav>
        </div>
    );
  }
  export default Header;