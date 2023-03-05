const ListingData = () => {
    const getBooksData = () => {
        return localStorage.getItem('books');
    }
    const books = JSON.parse(getBooksData());
    return (
        <div>
            <h1>Last Book Record</h1>
            {books.name}
        </div>
    )
}

export default ListingData;