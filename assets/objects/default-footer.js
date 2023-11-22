class defaultFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-item">
                    <strong>Diensten</strong>
                    <ul>
                        <li><a href="#">Plaats je huis op Funda</a></li>
                        <li><a href="#">Zoek een NVM-makelaar</a></li>
                        <li><a href="#">Bladeren door aanbod</a></li>
                        <li><a href="#">Wat is mijn woning waard?</a></li>
                    </ul>
                </div>
                <div class="footer-item">
                    <strong>Informatie</strong>
                    <ul>
                        <li><a href="#">Vraag & antwoord</a></li>
                        <li><a href="#">Funda Index</a></li>
                        <li><a href="#">Alles over een huis kopen</a></li>
                        <li><a href="#">Verkoop je huis</a></li>
                        <li><a href="#">Hoe zoek ik op Funda?</a></li>
                    </ul>
                </div>
                <div class="footer-item">
                    <strong>Makelaars</strong>
                    <ul>
                        <li><a href="#">Funda desk</a></li>
                        <li><a href="#">Tips, trends & nieuws</a></li>
                        <li><a href="#">Leads</a></li>
                        <li><a href="#">Producten</a></li>
                        <li><a href="#">Events & meetups</a></li>
                    </ul>
                </div>
                <div class="footer-item">
                    <strong>Over ons</strong>
                    <ul>
                        <li><a href="#">Over Funda</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Werken bij Funda</a></li>
                        <li><a href="#">Adviseren</a></li>
                        <li><a href="#">Redactioneel beleid</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </footer>
    `;
  }
}

customElements.define('default-footer', defaultFooter);