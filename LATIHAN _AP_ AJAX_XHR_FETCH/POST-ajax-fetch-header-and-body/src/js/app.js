// Mendapatkan angka acak agar meminimalisir duplikasi data
const randomNumber = Math.floor(Math.random() * 1000) + 1;

fetch("https://books-api.dicoding.dev/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Token": "12345"
  },
  body: JSON.stringify({
    id: randomNumber,
    title: `Buku sejarah - ${randomNumber}`,
    author: `Handi - ${randomNumber}`
  })
})
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    console.log(responseJson);
  })
  .catch((error) => {
    console.log(error);
  });
