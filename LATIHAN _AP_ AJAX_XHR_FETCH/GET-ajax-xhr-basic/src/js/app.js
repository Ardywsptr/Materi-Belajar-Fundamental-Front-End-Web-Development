const xhr = new XMLHttpRequest();

xhr.onload = function () {
  const response = JSON.parse(this.responseText);
  response.books.forEach((book, index) => {
    document.body.innerText += `${index + 1}. ${book.title}\n`;
  });
};

xhr.onerror = function () {
  console.log("Ups something error");
};

xhr.open("GET", "https://books-api.dicoding.dev/list");
xhr.send();
