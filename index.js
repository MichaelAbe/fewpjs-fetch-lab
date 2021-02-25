// function fetchBooks('https://anapioficeandfire.com/') {
//   .then(resp => resp.json())
//   .then(json => console.log(json))
// }

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})


fetch('http://pargitaru.id.lv/api/?type=json&request=chords&chord=A') .then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
}); 