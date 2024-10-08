let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.display = function() {
    console.log(`Title: ${this.title} \nAuthor: ${this.author} \nPages: ${this.pages}`)
}

function addBook(arr, bookArr) {
    arr.push([Book.title]);
    return arr;
}

function bookByTitle(arr, titleQuery) {
    let book = arr.filter(Book.title.titleQuery);
    if (book) {
        return `Title: ${book.title} \nAuthor: ${book.author} \nPages: ${book.pages}`;
    } else {
        return `Title: ${titleQuery} not found in library`;
    }
}

function bookByAuthor(arr, authorQuery) {
    let book = arr.filter(Book.author.authorQuery);
    if (book) {
        return `Title: ${book.title} \nAuthor: ${book.author} \nPages: ${book.pages}`;
    } else {
        return `Title: ${authorQuery} not found in library`;
    }
}

function filterPages(arr) {

}


Book("title", "author", 100);

