import React from "react";
import axios from "axios";
export default class MyList extends React.Component {
  state = {
    blogs: [],
  };
  componentDidMount() {
      axios.get(`https://dummyjson.com/users`)
          .then((response) => {
      const posts = response.data;
      this.setState({ posts });
    });
  }
  render() {
    return (
      <ul>
            {this.state.blogs.map((el, i) => (
                <li key={el.id}>{el.firstName}</li>
       ))}
      </ul>
    );
  }
}
