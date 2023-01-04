import React from "react";
import axios from "axios";
import { useTable } from "react-table";
export default class MyList extends React.Component {
  state = {
    blogs: [],
  };
  componentDidMount() {
      axios.get(`https://dummyjson.com/users`)
          .then((response) => {
      const posts = response.data.users;
       this.setState({posts });
              console.log(posts);
    },[]);
  }
  render() {
    return (
      <div>
        <h2>Fetch table data</h2>
        {this.state.blogs.map((item, i) => {
          return <div key={item.id}>{item.firstName}</div>;
       })}
      </div>
    );
  }
}
