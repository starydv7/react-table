import React from "react";
import axios from "axios";
import { useTable } from "react-table";
export default class MyList extends React.Component {
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
  // componentDidMount() {
  //   axios.get(`https://dummyjson.com/users`).then((response) => {
  //     const posts = response.data.users;
  //     this.setState({ posts });
  //     //console.log(posts);
  //   }, []);
  // }
   render() {
        return (
        <>
            <button onClick={this.fetchBooks}>Load Books</button>
            {this.books.length > 0 && (
                <ul>
                    {this.state.books.map((book) => (
                        <li key={book.id}>{book.firstName}</li>
                    ))}
                </ul>
            )}
            
        </>
        )
    }
}

