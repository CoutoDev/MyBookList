;(function(){
    
    // Event: Display Books
    document.addEventListener('DOMContentLoaded', UI.displayBooks);

    // Event: Add a Book
    document.querySelector('#book-form')
            .addEventListener('submit', (event) => {
                event.preventDefault();
                const title = document.querySelector('#title').value;
                const author = document.querySelector('#author').value;
                const isbn = document.querySelector('#isbn').value;

                if(title === '' || author === ''|| isbn === '' ){
                    UI.showAlert('Please fill in all fields', 'danger');
                } else {
                    const book = new Book(title, author, isbn);
    
                    UI.addBookToList(book);

                    Store.addBook(book);

                    UI.showAlert('Book Added', 'success');
    
                    UI.clearFields();
                }


            });

    // Event: Remove a Book
    document.querySelector('#book-list')
            .addEventListener('click', (event) =>{

                // Remove book from UI
                UI.deleteBook(event.target);
                // Remove book from UI
                Store.removeBook(event.target.parentElement.previousElementSibling.textContent);
                UI.showAlert('Book Removed', 'success');
            });

})();