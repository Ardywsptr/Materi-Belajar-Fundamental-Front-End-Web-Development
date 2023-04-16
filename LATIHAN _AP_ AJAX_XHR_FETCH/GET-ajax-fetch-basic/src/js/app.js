fetch("https://books-api.dicoding.dev/list")
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    document.body.innerText = JSON.stringify(responseJson);
  })
  .catch((error) => {
    console.log(error);
  });

// Using async - await

/*
async function getBook() {
  try {
    const response = await fetch("https://books-api.dicoding.dev/list");
    const responseJson = await response.json();
    document.body.innerText = JSON.stringify(responseJson);
  } catch (error) {
    console.log(error);
  }
}

getBook();
*/
