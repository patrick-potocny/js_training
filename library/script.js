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

// MODAL (Adding books)
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('modal-overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })
  
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })
  
  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }


function addBook() {
    const title = document.getElementById("book-title").value
    const author = document.getElementById("book-author").value
    const pages = document.getElementById("book-pages").value
    let read = document.getElementById("book-read").checked
    read = read ? 'YES' : 'NO'

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    updateBooks(myLibrary)

    const modal = document.getElementById('modal')
    closeModal(modal)
    jjjj
    const form = document.getElementsByClassName('form-container')[0]
    form.reset()
}

