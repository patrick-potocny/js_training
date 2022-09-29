let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.read = read
    this.pages = pages
    this.updateRead = function () {
        if (this.read === 'YES'){
            this.read = 'NO'
        }else {
            this.read = 'YES'
        }
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary('Book1', 'author1', '333', 'YES');
addBookToLibrary('Book2', 'author2', '333', 'NO');
addBookToLibrary('Book3', 'author3', '333', 'YES');
addBookToLibrary('Book4', 'author4', '444', 'NO');


function updateBooks(library) {
    const booksElement = document.getElementById('books-grid')
    booksElement.innerHTML = ''
    for (bookIndex in library){
        book = library[bookIndex]
        booksElement.innerHTML += `
        <div class="card">
            <h3 class="title">${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="pages">Number of pages: <span>${book.pages}</span></p>
            <div class="read-book">
                <p class="read-p">Read the book: </p>
                <button class="read-btn" data-book-index="${bookIndex}" onclick=updateRead(this)>${book.read}</button>
            </div>
            <button class="remove-book" data-book-index="${bookIndex}" onclick=removeBook(this)>Remove Book</button>
        </div>`
    }
}

function updateRead(element) {
    myLibrary[element.dataset.bookIndex].updateRead()
    updateBooks(myLibrary)
}

function removeBook(element) {
    myLibrary.splice(element.dataset.bookIndex, 1)
    updateBooks(myLibrary)
}

updateBooks(myLibrary)




