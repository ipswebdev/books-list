import { useContext, useState } from "react";
import BooksContext from "../context/BooksContext";

function CreateBook(){
    const { addNewBook } = useContext(BooksContext);
    const [title, addTitle] = useState('');
    const setTitle = (e) => {
        addTitle(e.target.value);
    }
    const addBook = () => {
        if(title.trim()){
            addNewBook(title);
            addTitle('')
        }
        
    }
    return (
        <div>
            {title}
            <input value={title} onChange={setTitle}/>
            <button onClick={addBook}>Create Book</button>
        </div>
    )
}

export default CreateBook;