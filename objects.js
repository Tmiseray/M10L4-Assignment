let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.display = function() {
    console.log(`Title: ${this.title} \nAuthor: ${this.author} \nPages: ${this.pages}`);
}

function addBook(arr, i, title, author, pages) {
    let i = new Book(title, author, pages);
    arr.push(i);
    return arr;
}

function bookByTitle(arr, titleQuery) {
    arr.filter(function(book) {
        if (book.title == titleQuery) {
            return `Title: ${book.title} \nAuthor: ${book.author} \nPages: ${book.pages}`;
        } else {
            return `Title: ${titleQuery} not found in library`;
        }
    });
}

function bookByAuthor(arr, authorQuery) {
    arr.filter(function(book) {
        if (book.author == authorQuery) {
            return `Title: ${book.title} \nAuthor: ${book.author} \nPages: ${book.pages}`;
        } else {
            return `Author: ${authorQuery} not found in library`;
        }
    });
}

function filterPages(arr) {
    arr.filter(function(book) {
        if (book.pages >= 100) {
            return `Title: ${book.title} \nAuthor: ${book.author} \nPages: ${book.pages}`;
        } else {
            return "Books with 100 or more pages not found in library";
        }
    });
}




