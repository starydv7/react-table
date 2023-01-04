import React from "react";
import axios from "axios";
import { useTable } from "react-table";
 class MyList extends React.Component {
  state = {
    books: [],
  };
   fetchBooks = () => {
        fetch('https://dummyjson.com/users')
        .then((response) => response.json())
        .then(booksList => {
            this.setState({ books: booksList });
        });
    }
 
   render() {
        return (
        <>
                <div>
                    {this.state.books.map((el, i) => (
                        <ul key={el.id}>{el.firstName}</ul>
                    ))}
          </div>
        </>
        )
    }
}

export default MyList;
