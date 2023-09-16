import { useState } from "react";
import CreateBook from "./CreateBook";
import BookShow from "./BookShow";
import BooksContext from "../context/BooksContext";
import { useContext } from "react";

function App(){
    // const {count , incrementCount} = useContext(BooksContext)
    const {books,addNewBook} = useContext(BooksContext)

    const printAllBooks = ()=>{
        let str = books.map(b=>b.title).join(', ');
        console.log(books)
        alert(str);
        console.log(books)
    }
    const idGenerator = () => {
        return Date.now();
    }

    // const editTitle = (book) => {
    //     let bookToEdit = books.filter((b) => b.id === book.id);
    //     let indexToEdit = books.findIndex(b => b.id === book.id);
    //     // editBook(indexToEdit);
    //     // if(bookToEdit && bookToEdit.length){
    //     //     bookToEdit[0].title = book.title;
    //     //     let otherBooks = books.slice(0,indexToEdit);
    //     //     let remainingBooks = books.slice(indexToEdit+1,books.length)
    //     //     setBooks([...otherBooks,...bookToEdit,...remainingBooks])
    //     // }
    // }

    // const onDeleteBook = (id) => {
    //     // const updatedBooks = books.filter((b) => {
    //     //     return b.id !== id;
    //     //   });
    //     //   setBooks(updatedBooks);
    //     // deleteBook(id)
    // }

    // const onAddBook = (title) => {
    //     let book = {
    //                     title : title,
    //                     id : idGenerator(),
    //     };
    //     addNewBook(title)
    // }
    return (
        <div>
            <button onClick={printAllBooks}>Print all currently available books</button>
            <CreateBook/>
            { books.map((b)=>{ return <BookShow book={b}  key={b.id}/>})}
        </div>
    );
}

export default App;