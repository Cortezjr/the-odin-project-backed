class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  
    toggleReadStatus() {
      this.read = !this.read;
    }
  }
  let myLibrary = [];

  // Function to add a book to the library
  function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
  }
  const bookContainer = document.getElementById('book-container');

  function displayBooks() {
    bookContainer.innerHTML = ''; // Clear container
    myLibrary.forEach((book, index) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
  
      bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p class="${book.read ? 'read-status' : 'not-read'}">
          ${book.read ? 'Read' : 'Not Read'}
        </p>
        <button onclick="toggleRead(${index})">
          Toggle Read
        </button>
        <button onclick="removeBook(${index})">
          Remove Book
        </button>
      `;
  
      bookContainer.appendChild(bookCard);
    });
  }
  
  // Function to toggle read status
  function toggleRead(index) {
    myLibrary[index].toggleReadStatus();
    displayBooks();
  }
  
  // Function to remove a book
  function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
  const addBookBtn = document.getElementById('add-book-btn');
  const bookForm = document.getElementById('book-form');
  const newBookForm = document.getElementById('new-book-form');
  
  addBookBtn.addEventListener('click', () => {
    bookForm.classList.toggle('hidden');
  });
  
  newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
  
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
  
    newBookForm.reset();
    bookForm.classList.add('hidden');
  });
  function saveLibrary() {
    localStorage.setItem('library', JSON.stringify(myLibrary));
  }
  
  function loadLibrary() {
    const storedLibrary = localStorage.getItem('library');
    if (storedLibrary) {
      myLibrary = JSON.parse(storedLibrary).map(
        (book) => new Book(book.title, book.author, book.pages, book.read)
      );
      displayBooks();
    }
  }
  
  // Call loadLibrary when the script loads
  loadLibrary();
        