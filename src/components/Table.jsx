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
              console.log(posts);
    },[]);
  }
  render() {
    return (
      <div>
        <h2>Fetch table data</h2>
      </div>
    )
  }
}
