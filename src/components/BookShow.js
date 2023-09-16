import { useContext, useState } from "react";
import BooksContext from "../context/BooksContext";

function BookShow({book}){
    
    const {editBook,deleteBook} = useContext(BooksContext);
    const [changedTitle , setNewTitle] = useState(book.title)
    const [editMode , setEditState] = useState(false)
    const changeTitle = () => {
        console.log(changedTitle,book)
        if(changedTitle.trim()){
            editBook({title:changedTitle,id:book.id})
            setEditState(false)
        }else{
            setEditState(false);
            alert('Book Title cant be empty string!')
        }
        
    }
    const deleteBookInstance = (id) => {
        deleteBook(id);
    }
    const editState = () => {
        setEditState(true)
    }
    const setBookTitle = (e) => {
        setNewTitle(e.target.value.trim())
    }
    const displayBook = () => {
        if(editMode){
            return (<div><input value={changedTitle} onChange={setBookTitle}/><button onClick={changeTitle}>Change Title</button></div>)
        }else{
            return <div>{book.title} <button onClick={editState}>Edit Title</button><button onClick={() => deleteBookInstance(book.id)}>X</button></div>
        }
    }
    return displayBook()
}

export default BookShow;