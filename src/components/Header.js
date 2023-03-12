const Header = () => {
    return (
        <header className="d-flex justify-content-center align-items-center">
            <navbar className="container d-flex justify-content-between align-items-center">
                <div>BBT Library</div>
                <div className="d-flex gap-2">
                    <a href="/" id="home-link">Home</a>
                    <a href="/books" id="books-link">Books</a>
                </div>
            </navbar>
        </header>
    )
}
export default Header;