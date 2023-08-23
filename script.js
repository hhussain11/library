
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('#read').checked = false

}

let AddBookButton = document.querySelector('#submit');

AddBookButton.addEventListener('click', (event)=> {
  event.preventDefault();
  addBookToLibrary();
})



//Form appear//

let newBookButton = document.querySelector('#new-book-button');
let form = document.querySelector('#library-form');

newBookButton.addEventListener('click', ()=> {
  form.style.display = 'block';
})

//Cards appear//

let cardsContainer = document.querySelector('.cards-container');

function render() {

  for (let i=0; i < myLibrary.length; i++) {
  
    let card = document.createElement('div');
    let book = myLibrary[i];
  
    card.setAttribute('class', 'card');
    card.innerHTML = `<p>${book.title}</p>
                      <p>${book.author}</p>
                      <p>${book.pages}</p>
                      <p>${(book.read) ? "Read" : "Not read"}</p>
                      <button class="remove" onclick="removeBook(${i})"> X </button>
                      <button class="is-read" onclick="changeReadStatus(${i})"> Read </button>
                      
                      `;

    cardsContainer.appendChild(card);
    
  }

}

function changeReadStatus(index) {
  if (myLibrary[index].read == false) {
    myLibrary[index].read = true;
  }

  else {
    myLibrary[index].read = false;
  }

  cardsContainer.innerHTML = '';
  render();


  

  
}

function removeBook(index) {
  myLibrary.splice(index,1);
  cardsContainer.innerHTML = '';
  render();
}

AddBookButton.addEventListener('click', () => {
  cardsContainer.innerHTML = '';
  render();

})
