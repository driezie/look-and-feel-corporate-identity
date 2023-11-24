class gridlistHouses extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="content">
        <div class="default-grid">
            <a class="item" href="">
                <img class="banner-img" src="./assets/img/house1.jpg" alt="Bloemfonteinstraat 8 F">
                <div class="item-content">
                    <div class="addedby">
                        <img src="./assets/img/person.png" alt="naam">
                    </div>
                    <h2>Bloemfonteinstraat 8 F</h2>
                    <p class="postal-adress">9693 EJ Bad Nieuweschans</p>
            
                    <ul class="kenmerken">
                        <li><span title="Gebruiksoppervlakte wonen">78 m²</span> /</li>
                        <li><span title="Perceeloppervlakte">141 m²</span> ·</li>
                        <li><span title="AantalKamers">3 kamers</span></li>
                    </ul>
                    <p class="price">€ 400.000 k.k.</p>
                    <img src="./assets/svg/makelaar/nvm.svg" alt="Makkelaar NVM" class="makelaar">
                    <p class="date">2 uur geleden</p>
                </div>
            </a>

            <a class="item" href="">
                <img class="banner-img" src="./assets/img/house2.jpg" alt="Winkelstraat 65B">
                <div class="item-content">
                    <div class="addedby">
                        <img src="./assets/img/person.png" alt="naam">
                    </div>
                    <h2>Winkelstraat 65B</h2>
                    <p class="postal-adress">6716 AB Gouda</p>
                    <ul class="kenmerken">
                        <li><span title="Gebruiksoppervlakte wonen">78 m²</span> /</li>
                        <li><span title="Perceeloppervlakte">141 m²</span> ·</li>
                        <li><span title="AantalKamers">3 kamers</span></li>
                    </ul>
                    <p class="price">€ 500.000 k.k.</p>
                    <img src="./assets/svg/makelaar/nvm.svg" alt="Makkelaar NVM" class="makelaar">
                    <p class="date">5 uur geleden</p>
                </div>
            </a>

            <a class="item" href="">
                <img class="banner-img" src="./assets/img/house3.jpg" alt="Diepenbrockstraat 2 a">
                <div class="item-content">
                    <div class="addedby">
                        <img src="./assets/img/person.png" alt="naam">
                    </div>
                    <h2>Diepenbrockstraat 2 a</h2>
                    <p class="postal-adress">7132 AM Lichtenvoorde 't Zand</p>
                    <ul class="kenmerken">
                        <li><span title="Gebruiksoppervlakte wonen">78 m²</span> /</li>
                        <li><span title="Perceeloppervlakte">141 m²</span> ·</li>
                        <li><span title="AantalKamers">3 kamers</span></li>
                    </ul>
                    <p class="price">€ 379.000 k.k.</p>
                    <img src="./assets/svg/makelaar/nvm.svg" alt="Makkelaar NVM" class="makelaar">
                    <p class="date">6 uur geleden</p>
                </div>
            </a> 
        </div>
        <div class="pager">
            <p>Pagina 1 van 3</p>
            <div class="pager-pages flex-center-center">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
            </div>
        </div>
    </div>
      `;
    }
  }
  
  customElements.define('gridlist-houses', gridlistHouses);