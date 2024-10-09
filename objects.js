let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.display = function() {
    console.log(`Title: ${this.title} \nAuthor: ${this.author} \nPages: ${this.pages}`);
}

function addBook(arr, title, author, pages) {
    const book = new Book(title, author, pages);
    arr.push(book);
    console.log("New Book Added:");
    book.display();
}

function mapLibraryBooks(arr) {
    return arr.map(book => {
        return {
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`,
            pages: `Pages: ${book.pages}`
        };
    });
}

function bookByTitle(arr, titleQuery) {
    const results = arr.filter(book => book.title === titleQuery);
    console.log("Title Query Results:");
    if (results.length > 0) { 
        return results;
    } else {
        console.log(`Title: ${titleQuery} not found in library.`);
        return [];
    }
}

function bookByAuthor(arr, authorQuery) {
    const results = arr.filter(book => book.author === authorQuery);
    console.log("Author Query Results:");
    if (results.length > 0) {
        return results;
    } else {
        console.log(`Author: ${authorQuery} not found in library.`);
        return [];
    }
}

function filterPages(arr) {
    const results = arr.filter(book => book.pages >= 100);
    console.log("Pages Query Results:");
    if (results.length > 0) {
        return results;
    } else {
        console.log("No books with 100 or more pages found in the library.");
        return [];
    }
}

function displayFormattedBooks(arr) {
    arr.forEach(book => {
        console.log(`${book.title}\n${book.author}\n${book.pages}`);
    });
}


addBook(library, '1984', 'George Orwell', 328);
addBook(library, 'To Kill a Mockingbird', 'Harper Lee', 281);
addBook(library, 'The Great Gatsby', 'F. Scott Fitzgerald', 180);
addBook(library, 'The Hobbit', 'J.R.R. Tolkien', 95);

const resultsByTitle = bookByTitle(library, '1984');
const formattedResultsByTitle = mapLibraryBooks(resultsByTitle);
displayFormattedBooks(formattedResultsByTitle);

const resultsByAuthor = bookByAuthor(library, 'Harper Lee');
const formattedResultsByAuthor = mapLibraryBooks(resultsByAuthor);
displayFormattedBooks(formattedResultsByAuthor);

const resultsExample = bookByTitle(library, 'Unknown Title');
const formattedResultsExample = mapLibraryBooks(resultsExample);
displayFormattedBooks(formattedResultsExample);

const resultsExample2 = bookByAuthor(library, 'Unknown Author'); 
const formattedResultsExample2 = mapLibraryBooks(resultsExample2);
displayFormattedBooks(formattedResultsExample2);

const resultsByPages = filterPages(library);
const formattedResultsByPages = mapLibraryBooks(resultsByPages);
displayFormattedBooks(formattedResultsByPages);
