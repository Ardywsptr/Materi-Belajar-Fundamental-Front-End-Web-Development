const xhr = new XMLHttpRequest();

xhr.onload = function () {
  document.body.innerText = this.responseText;
};

xhr.onerror = function (e) {
  console.log("Ups something error");
  console.log(e);
};

xhr.open("POST", "https://books-api.dicoding.dev/add");

// menambahkan properti pada header request
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Auth-Token", "12345");

// Mendapatkan angka acak agar meminimalisir duplikasi data
const randomNumber = Math.floor(Math.random() * 1000) + 1;

const book = {
  id: randomNumber,
  title: `Merokok membunuhmu ${randomNumber}`,
  author: `M. Marzuki ${randomNumber}`
};

xhr.send(JSON.stringify(book));
