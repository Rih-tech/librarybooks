const books = [
    { title: 'Applied Thermodynamics', author: 'R.K. Rajput', shelf: 1, row: 'Left side' },
    { title: 'Engineering Mechanics', author: 'R.S. Khurmi', shelf: 2, row: 'Right side' },
    { title: 'Basic Electrical Engineering', author: 'V.K. Mehta', shelf: 3, row: 'Middle' },
    { title: 'Basic Electronics Engineering', author: 'B.L. Theraja', shelf: 4, row: 'Left side' },
    { title: 'Engineering Drawing', author: 'N.D. Bhatt', shelf: 5, row: 'Right side' },
    { title: 'Mathematics for Engineers', author: 'B.S. Grewal', shelf: 6, row: 'Left side' },
    { title: 'Mechanical Engineering', author: 'M.S. Mahajan', shelf: 7, row: 'Right side' },
    { title: 'Programming in C', author: 'E. Balagurusamy', shelf: 8, row: 'Middle' },
    { title: 'Engineering Physics', author: 'D.S. Mathur', shelf: 9, row: 'Left side' },
    { title: 'Engineering Chemistry', author: 'Jain & Jain', shelf: 10, row: 'Right side' },
    { title: 'Solid Mechanics', author: 'R.S. Khurmi', shelf: 11, row: 'Middle' },
    { title: 'Introduction to Computing', author: 'P.K. Sinha', shelf: 12, row: 'Left side' },
    { title: 'Digital Logic Design', author: 'M. Morris Mano', shelf: 13, row: 'Right side' },
    { title: 'Fluid Mechanics', author: 'R.K. Bansal', shelf: 14, row: 'Middle' },
    { title: 'Strength of Materials', author: 'R.S. Khurmi', shelf: 15, row: 'Left side' },
    { title: 'Engineering Mathematics I', author: 'B.S. Grewal', shelf: 16, row: 'Right side' },
    { title: 'Engineering Mechanics (Statics)', author: 'A.P. Boresi', shelf: 17, row: 'Middle' },
    { title: 'Basic Civil Engineering', author: 'S.S. Bhavikatti', shelf: 18, row: 'Left side' },
    { title: 'Electrical Engineering Fundamentals', author: 'A.E. Fitzgerald', shelf: 19, row: 'Right side' },
    { title: 'Mechanical Engineering Materials', author: 'G.K. Lal', shelf: 20, row: 'Middle' },
    { title: 'Introduction to Engineering', author: 'P. Mehta', shelf: 21, row: 'Left side' },
    { title: 'Engineering Graphics', author: 'K.V. Narayana', shelf: 22, row: 'Right side' },
    { title: 'Environmental Science and Engineering', author: 'P. Mehta', shelf: 23, row: 'Middle' },
    { title: 'Object-Oriented Programming', author: 'E. Balagurusamy', shelf: 24, row: 'Left side' },
    { title: 'Numerical Methods for Engineers', author: 'S. C. Chapra', shelf: 25, row: 'Right side' },
    { title: 'Engineering Drawing', author: 'N.D. Bhatt', shelf: 26, row: 'Middle' },
    { title: 'Engineering Physics', author: 'H.C. Verma', shelf: 27, row: 'Left side' },
    { title: 'Electromagnetic Fields', author: 'William Hayt', shelf: 28, row: 'Right side' },
    { title: 'Programming in C++', author: 'Bjarne Stroustrup', shelf: 29, row: 'Middle' },
    { title: 'Mechanics of Solids', author: 'R.S. Khurmi', shelf: 30, row: 'Left side' },
    { title: 'Engineering Thermodynamics', author: 'Y.V.C. Rao', shelf: 31, row: 'Right side' },
    { title: 'Basic Electrical Engineering', author: 'J.B. Gupta', shelf: 32, row: 'Middle' },
    { title: 'Engineering Mathematics II', author: 'B.S. Grewal', shelf: 33, row: 'Left side' },
    { title: 'Theory of Machines', author: 'R.S. Khurmi', shelf: 34, row: 'Right side' },
    { title: 'Control Systems Engineering', author: 'I.J. Nagrath', shelf: 35, row: 'Middle' },
    { title: 'Applied Chemistry', author: 'A.K. Srivastava', shelf: 36, row: 'Left side' },
    { title: 'Strength of Materials', author: 'R.K. Bansal', shelf: 37, row: 'Right side' },
    { title: 'Fluid Mechanics', author: 'M.A. K. Sharma', shelf: 38, row: 'Middle' },
    { title: 'Introduction to Engineering Materials', author: 'T.P. Rao', shelf: 39, row: 'Left side' },
    { title: 'Electrical Machines', author: 'B.L. Theraja', shelf: 40, row: 'Right side' },
    { title: 'Engineering Mathematics III', author: 'B.S. Grewal', shelf: 41, row: 'Middle' },
    { title: 'Introduction to Signals and Systems', author: 'A.V. Oppenheim', shelf: 42, row: 'Left side' },
    { title: 'Digital Circuits and Systems', author: 'M. Morris Mano', shelf: 43, row: 'Right side' },
    { title: 'Control Systems', author: 'Norman Nise', shelf: 44, row: 'Middle' },
    { title: 'Engineering Mechanics (Dynamics)', author: 'I.H. Shames', shelf: 45, row: 'Left side' },
    { title: 'Electric Circuit Analysis', author: 'W.H. Hayt', shelf: 46, row: 'Right side' },
    { title: 'Electronics Engineering', author: 'U.A. Bakshi', shelf: 47, row: 'Middle' },
    { title: 'Fluid Mechanics and Hydraulic Machines', author: 'R.K. Bansal', shelf: 48, row: 'Left side' },
    { title: 'Introduction to Digital Logic Design', author: 'M. Morris Mano', shelf: 49, row: 'Right side' },
    { title: 'Environmental Engineering', author: 'S.K. Gupta', shelf: 50, row: 'Middle' }
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