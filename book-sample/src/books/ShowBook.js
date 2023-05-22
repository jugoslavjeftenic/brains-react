const ShowBook = ({ book }) => {
    return (
        <div className='book_card'>
            <div className='book_title_container'>
                <p className='book_title'> {book.title} </p>
            </div>
            <div className='book_info'>
                <div> {book.authors} </div>
                <div> {book.year} </div>
                <div> {book.isbn} </div>
                <div> {book.genre} </div>
                <div> {book.rating} </div>
            </div>
        </div>
    );
};

export default ShowBook;