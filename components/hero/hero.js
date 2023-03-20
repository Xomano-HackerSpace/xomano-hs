
class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="/components/hero/hero.css" />
    <section class="hero" id="first">
      <div class="hero-first">
        <a href="https://github.com/Xomano-HackerSpace" target="_blank">
          <div class="hero-github">
            <div class="hero-github_block">
              <img src="/assets/svg/github.svg" alt="github logo" />GITHUB
            </div>
            <div class="hero-github_block gh-text">Xomano-HackerSpace</div>
          </div>
        </a>
        <div class="hero-info">
          <img
            src="/assets/svg/xomano-hackerspace.svg"
            alt="xomano logo"
          />
          <h1></h1>
          <p>

          </p>
        </div>
      </div>
    </section>
    `;

    const enableGh = this.getAttribute("enable-gh");
    if (enableGh === "false") {
      this.querySelector(".hero-github").style.display = "none";
      this.querySelector(".hero-info").style.gridColumn = "1 / 3";
    }

    const title = this.getAttribute("title");
    if (title) {
      this.querySelector(".hero-info h1").textContent = title;
    }

    const description = this.getAttribute("description");
    if (description) {
      this.querySelector(".hero-info p").textContent = description;
    }

    const image = this.getAttribute("image");
    if (image) {
      this.querySelector(".hero").style.backgroundImage = `linear-gradient(rgba(0, 44, 65, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`;
    }

  }
}

customElements.define("hero-component", HeroComponent);