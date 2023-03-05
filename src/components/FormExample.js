const FormExample = () => {
    const handleSubmit = (event) => {
        localStorage.setItem('books',JSON.stringify({
            name : event.target.firstname.value,
            lastName : event.target.lastname.value,
            country : event.target.country.value,
            subject : event.target.subject.value
        }))
    }
    return ( 
        <div className="container d-flex flex-column">
            <h5>Add new books to storage.</h5>
            <form className="d-flex flex-column" onSubmit={(event) => handleSubmit(event)}>

                <label htmlFor="fname">Book Name</label>
                <input type="text" id="fname" name="bookname" placeholder="Your name.."/>

                <label htmlFor="lname">Author Name</label>
                <input type="text" id="lname" name="authorname" placeholder="Your last name.."/>

                <label htmlFor="lname">Page Number</label>
                <input type="text" id="lname" name="pagenumber" placeholder="Your last name.."/>

                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    );
}

export default FormExample;