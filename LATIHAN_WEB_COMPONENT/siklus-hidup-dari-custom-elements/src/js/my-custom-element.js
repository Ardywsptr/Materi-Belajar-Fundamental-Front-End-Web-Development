class ImageFigure extends HTMLElement {
  constructor() {
    super();
    console.log("constructed!");
  }

  connectedCallback() {
    console.log("connected!");
  }

  disconnectedCallback() {
    console.log("disconnected!");
  }

  adoptedCallback() {
    console.log("adopted!");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute: ${name} changed!`);
  }

  // digunakan untuk mengamati perubahan nilai attribute caption
  /* kita bisa menetapkan lebih dari satu attribute yang diamati.
     dengan memisahkan nama attribute menggunakan koma. Contoh: */
  // return ["caption", "title", "src", ...]
  static get observedAttributes() {
    return ["caption"];
  }
}

customElements.define("image-figure", ImageFigure);
