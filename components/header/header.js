function showMobileMenu() {
  const siteHeader = document.getElementById('page-header')
  siteHeader.classList.toggle("header-mobile");
}

class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="/components/header/header.css" />
    <header id="page-header" class="">
      <div class="header__logo">
        <img class="header__logo-img" src="/assets/svg/xomano-hs.svg" alt="Xomano HS" />
      </div>
      <div class="header__menu">

      </div>
      <div class="header__button-wrapper">
        <button
          class="header__button header__button--mobile"
          onclick="showMobileMenu()"
        >
          MENU
        </button>
        <button
          class="header__button header__button--close"
          onclick="showMobileMenu()"
        >
          CLOSE
        </button>
        <button class="header__button header__button--desktop"> </button>
      </div>
    </header>
    `;

    JSON.parse(this.getAttribute("links")).forEach((link) => {
      const linkElement = document.createElement("a");
      linkElement.classList.add("header__menu-link");
      linkElement.setAttribute("href", link.href);
      linkElement.innerHTML = link.text;
      this.querySelector(".header__menu").appendChild(linkElement);
    });

    const desktopButtonElement = this.querySelector(".header__button--desktop");

    desktopButtonElement.textContent = this.getAttribute("desktop-button");
    desktopButtonElement.addEventListener("click", () => {
      eval(this.getAttribute("desktop-button-action"));
    });
  }
}

customElements.define('header-component', HeaderComponent);