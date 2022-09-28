let myLibrary = [];

function Book(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.read}.`
    }
}

function addBookToLibrary(title, author, read) {
    const newBook = new Book(title, author, read);
    myLibrary.push(newBook);
}

addBookToLibrary('Book1', 'author1', 'read');
addBookToLibrary('Book2', 'author2', 'not read');
addBookToLibrary('Book3', 'author3', 'read');

const booksElement = document.getElementById('books')

function populateLibrary(params) {
    for (const book of myLibrary) {
        booksElement.
    }
}

