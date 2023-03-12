const ListBooks = () => {
    const getBooksData = () => {
        return localStorage.getItem('books');
    }
    const books = JSON.parse(getBooksData());
    return (
        <>
        
        <div className="container d-flex justify-content-center flex-column pt-5 gap-2">
            <h1>Last Book Record</h1>
            <div className="d-flex flex-column bookCard">
                <p id="author-name">{books?.authorName}</p>
                <p id="book-name">{books?.bookName}</p>
                <p id="page-number">{books?.pageNumber}</p>
                <p id="genre">{books?.genre}</p>
                <p id="subject">{books?.subject}</p>
            </div>
        </div>
        </>
    )
}

export default ListBooks;