class defaultNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header>
        <div class="header-container">
            <ul class="menu flex">
                <li class="menu-item hidden">
                    <button class="menu-button" onclick="toggleMenu()">
                            <img src="./assets/svg/menu.svg" alt="open menu" class="icon flex">
                    </button>
                </li>
                <li class="logo-item">
                    <a href="">
                        <img src="./assets/img/logo.png" alt="Funda logo" class="logo">
                    </a>
                </li>
                <li class="list-item">
                    <a href="#">Kopen</a>
                </li>
                <li class="list-item">
                    <a href="#">Huren</a>
                </li>
                <li class="list-item">
                    <a href="#">Verkopen</a>
                </li>
            </ul>
            <nav class="flex">
                <a href="#" title="Bewaarde huizen">
                    <img src="./assets/svg/savedhouses.svg" alt="Saved houses icon" class="icon">
                    
                    <span>
                        Bewaarde huizen
                    </span>
                </a>
                <a href="#" title="My account">
                    <img src="./assets/svg/account.svg" alt="Account icon" class="icon">
                    <span>
                        Jelte
                    </span>
                </a>
            </nav>
        </div>
    </header>
      `;
    }
  }
  
  customElements.define('default-navbar', defaultNavbar);