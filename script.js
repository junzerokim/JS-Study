class hello extends HTMLElement {
  connectedCallback() {
    let name = this.getAttribute('name');
    this.innerHTML = `<h2>${name}  안녕하세요</h2>`;
  }
  static get observedAttributes() {
    return ['name'];
  }
  attributesChangedCallback() {
    console.log(this.getAttribute('name'));
  }
}

customElements.define('custom-input', hello);
