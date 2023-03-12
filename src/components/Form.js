const Form = () => {
    const handleSubmit = (event) => {
        localStorage.setItem('books',JSON.stringify({
            bookName : event.target.bookname.value,
            authorName : event.target.authorname.value,
            pageNumber : event.target.pagenumber.value,
            genre : event.target.genre.value,   
            subject : event.target.subject.value
        }))
    }
    return ( 
        <div className="container d-flex flex-column justify-content-center align-items-center pt-5">
            <h5>Add new books to storage.</h5>
            <form className="d-flex flex-column myform" action="/books" onSubmit={(event) => handleSubmit(event)}>
        <div className="d-flex flex-column">
                <label htmlFor="fname">Book Name</label>
                <input type="text" id="book-name" name="bookname" placeholder="Book name.."/>
                </div>
                <div className="d-flex flex-column">
                <label htmlFor="lname">Author Name</label>
                <input type="text" id="author-name" name="authorname" placeholder="Author name.."/>
                </div>
                <div className="d-flex flex-column">
                <label htmlFor="lname">Page Number</label>
                <input type="text" id="page-number" name="pagenumber" placeholder="Page number.."/>
                </div>
                <div className="d-flex flex-column">
                <label htmlFor="genre">Genre</label>
                <select id="genre" name="genre">
                <option value="classic">Classic</option>
                <option value="horror">Horror</option>
                <option value="adventure">Adventure</option>
                </select>
                </div>
                <div className="d-flex flex-column">

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                </div>

                <input style={{height:"3rem"}} type="submit" value="Submit"/>

            </form>
        </div>
    );
}

export default Form;