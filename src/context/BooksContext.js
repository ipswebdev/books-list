import { createContext, useState } from "react";

const BooksContext = createContext();
function Provider({children}){

    const [count , setCount] = useState(0);
    const [books , setBooks] = useState([])
    const valueToShare = {
        count: count ,
        books: books,
        addNewBook: (title) => {
            let book = {
                title : title,
                id : idGenerator(),
            };
            setBooks([...books,book])
        },
        editBook : (book) => {
            let bookToEdit = books.filter((b) => b.id === book.id);
            let indexToEdit = books.findIndex(b => b.id == book.id);
            if(bookToEdit && bookToEdit.length){
                bookToEdit[0].title = book.title;
                let otherBooks = books.slice(0,indexToEdit);
                let remainingBooks = books.slice(indexToEdit+1,books.length)
                setBooks([...otherBooks,...bookToEdit,...remainingBooks])
            }
        },
        deleteBook : (id) => {
            const updatedBooks = books.filter((b) => {
                return b.id !== id;
            });
            setBooks(updatedBooks);
            
        },
        incrementCount: () => {
            setCount(count+1)
        }
    }
    const idGenerator = () => {
        return Date.now();
    }
    return(
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )

}

export {Provider};
export default BooksContext;