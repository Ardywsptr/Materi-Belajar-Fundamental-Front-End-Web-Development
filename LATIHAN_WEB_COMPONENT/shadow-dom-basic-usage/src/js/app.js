// Shadow Host
const divElement = document.createElement("div");

// Melampirkan shadow root pada shadow host
// Mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({ mode: "open" });
/* const shadowRoot = divElement.attachShadow({mode: "closed"});
divElement.shadowRoot // null;
shadowRoot // # shadow-root (closed) */

// element yang berada di dalam Shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini merupakan konten di dalam shadow DOM";


// Memasukkan element heading ke dalam shadow root
shadowRoot.appendChild(headingElement);

// Memasukkan elemen shadow host ke regular DOM
document.body.appendChild(divElement);  
