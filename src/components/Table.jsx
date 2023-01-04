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
 columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )
  render() {
    return (
      <div>
        <h2>Fetch table data</h2>
       
      </div>
    );
  }
}
