const books = [
    { title: 'Applied Thermodynamics', author: 'R.K. Rajput', shelf: 1, row: 1 },
    { title: 'Engineering Mechanics', author: 'R.S. Khurmi', shelf: 2, row: 2 },
    { title: 'Basic Electrical Engineering', author: 'V.K. Mehta', shelf: 3, row: 3 },
    { title: 'Basic Electronics Engineering', author: 'B.L. Theraja', shelf: 4, row: 4 },
    { title: 'Engineering Drawing', author: 'N.D. Bhatt', shelf: 5, row: 5 },
    { title: 'Mathematics for Engineers', author: 'B.S. Grewal', shelf: 6, row: 1 },
    { title: 'Mechanical Engineering', author: 'M.S. Mahajan', shelf: 7, row: 2 },
    { title: 'Programming in C', author: 'E. Balagurusamy', shelf: 8, row: 3 },
    { title: 'Engineering Physics', author: 'D.S. Mathur', shelf: 9, row: 4 },
    { title: 'Engineering Chemistry', author: 'Jain & Jain', shelf: 10, row: 5 },
    { title: 'Solid Mechanics', author: 'R.S. Khurmi', shelf: 11, row: 1 },
    { title: 'Introduction to Computing', author: 'P.K. Sinha', shelf: 12, row: 2 },
    { title: 'Digital Logic Design', author: 'M. Morris Mano', shelf: 13, row: 3 },
    { title: 'Fluid Mechanics', author: 'R.K. Bansal', shelf: 14, row: 4 },
    { title: 'Strength of Materials', author: 'R.S. Khurmi', shelf: 15, row: 5 },
    { title: 'Engineering Mathematics I', author: 'B.S. Grewal', shelf: 16, row: 1 },
    { title: 'Engineering Mechanics (Statics)', author: 'A.P. Boresi', shelf: 17, row: 2 },
    { title: 'Basic Civil Engineering', author: 'S.S. Bhavikatti', shelf: 18, row: 3 },
    { title: 'Electrical Engineering Fundamentals', author: 'A.E. Fitzgerald', shelf: 19, row: 4 },
    { title: 'Mechanical Engineering Materials', author: 'G.K. Lal', shelf: 20, row: 5 },
    { title: 'Introduction to Engineering', author: 'P. Mehta', shelf: 21, row: 1 },
    { title: 'Engineering Graphics', author: 'K.V. Narayana', shelf: 22, row: 2 },
    { title: 'Environmental Science and Engineering', author: 'P. Mehta', shelf: 23, row: 3 },
    { title: 'Object-Oriented Programming', author: 'E. Balagurusamy', shelf: 24, row: 4 },
    { title: 'Numerical Methods for Engineers', author: 'S. C. Chapra', shelf: 25, row: 5 },
    { title: 'Engineering Drawing', author: 'N.D. Bhatt', shelf: 26, row: 1 },
    { title: 'Engineering Physics', author: 'H.C. Verma', shelf: 27, row: 2 },
    { title: 'Electromagnetic Fields', author: 'William Hayt', shelf: 28, row: 3 },
    { title: 'Programming in C++', author: 'Bjarne Stroustrup', shelf: 29, row: 4 },
    { title: 'Mechanics of Solids', author: 'R.S. Khurmi', shelf: 30, row: 5 },
    { title: 'Engineering Thermodynamics', author: 'Y.V.C. Rao', shelf: 31, row: 1 },
    { title: 'Basic Electrical Engineering', author: 'J.B. Gupta', shelf: 32, row: 2 },
    { title: 'Engineering Mathematics II', author: 'B.S. Grewal', shelf: 33, row: 3 },
    { title: 'Theory of Machines', author: 'R.S. Khurmi', shelf: 34, row: 4 },
    { title: 'Control Systems Engineering', author: 'I.J. Nagrath', shelf: 35, row: 5 },
    { title: 'Applied Chemistry', author: 'A.K. Srivastava', shelf: 36, row: 1 },
    { title: 'Strength of Materials', author: 'R.K. Bansal', shelf: 37, row: 2 },
    { title: 'Fluid Mechanics', author: 'M.A. K. Sharma', shelf: 38, row: 3 },
    { title: 'Introduction to Engineering Materials', author: 'T.P. Rao', shelf: 39, row: 4 },
    { title: 'Electrical Machines', author: 'B.L. Theraja', shelf: 40, row: 5 },
    { title: 'Engineering Mathematics III', author: 'B.S. Grewal', shelf: 41, row: 1 },
    { title: 'Introduction to Signals and Systems', author: 'A.V. Oppenheim', shelf: 42, row: 2 },
    { title: 'Digital Circuits and Systems', author: 'M. Morris Mano', shelf: 43, row: 3 },
    { title: 'Control Systems', author: 'Norman Nise', shelf: 44, row: 4 },
    { title: 'Engineering Mechanics (Dynamics)', author: 'I.H. Shames', shelf: 45, row: 5 },
    { title: 'Electric Circuit Analysis', author: 'W.H. Hayt', shelf: 46, row: 1 },
    { title: 'Electronics Engineering', author: 'U.A. Bakshi', shelf: 47, row: 2 },
    { title: 'Fluid Mechanics and Hydraulic Machines', author: 'R.K. Bansal', shelf: 48, row: 3 },
    { title: 'Introduction to Digital Logic Design', author: 'M. Morris Mano', shelf: 49, row: 4 },
    { title: 'Environmental Engineering', author: 'S.K. Gupta', shelf: 50, row: 5 }
];

// Display books on the home page
function displayBooks() {
    const bookListDiv = document.getElementById('bookList');
    bookListDiv.innerHTML = '';
    
    // Sort books alphabetically by title
    const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
    
    sortedBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        
        const bookTitle = document.createElement('h3');
        bookTitle.innerText = book.title;
        
        const bookDetails = document.createElement('p');
        bookDetails.innerHTML = `Author: ${book.author}<br>Shelf: ${book.shelf}<br>Row: ${book.row}`;
        
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookDetails);
        
        bookListDiv.appendChild(bookItem);
    });
}

// Search books by title
function searchBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    
    const bookListDiv = document.getElementById('bookList');
    bookListDiv.innerHTML = '';
    
    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        
        const bookTitle = document.createElement('h3');
        bookTitle.innerText = book.title;
        
        const bookDetails = document.createElement('p');
        bookDetails.innerHTML = `Author: ${book.author}<br>Shelf: ${book.shelf}<br>Row: ${book.row}`;
        
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookDetails);
        
        bookListDiv.appendChild(bookItem);
    });
}

// Initialize book display on page load
window.onload = displayBooks;
