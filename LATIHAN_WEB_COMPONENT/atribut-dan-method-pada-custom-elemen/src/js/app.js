// Membuat element secara sintaksis jika element tidak terdapat pada DOM
if (!document.querySelector("image-figure")) {
  const imageFigureElement = document.createElement("image-figure");

  imageFigureElement.setAttribute("src", "https://i.imgur.com/iJq78XH.jpg");
  imageFigureElement.setAttribute("alt", "Dicoding Logo");
  imageFigureElement.setAttribute("caption", "Huruf g dalam logo Dicoding");

  document.body.appendChild(imageFigureElement);
}
