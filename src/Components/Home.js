import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount(){
    axios.get('/api/data')
      .then(res => res.data)
      .then(data => this.setState({
        data
      }))
      .catch(e => console.log(`Error fetching data:\n${e}`))
  };
  render(){
    const {data} = this.state;
    return(
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item =>
                <tr onClick={() => this.props.history.push(`/api/row/${item.id}`, data)}>
                  <td>{item.first}</td>
                  <td>{item.last}</td>
                  <td>{item.age}</td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
};

export default Home;
