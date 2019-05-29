import React, {Component} from 'react';
import axios from 'axios';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

class SingleRow extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      person: {},
    }
  }
  componentDidMount(){
    axios.get('/api/data')
      .then(res => res.data)
      .then(data => this.setState({data, person: data.filter(item => item.id === this.props.id)}))
      .catch(e => console.log(`Error fetching data:\n${e}`))
  }
  render(){
    const {data, person} = this.state;
    const ages = [];
    data.forEach(obj => ages.push(obj.age));
    let singlePerson = person[0]
    const options = {
      title: {
        text: "Age Chart"
      },
      series: [
        {
          data: ages,
        }
      ]
    };
    return(
      <div className="container">
        <h1>You found</h1>
        {singlePerson ?
          <div>
            <h6>First Name: {singlePerson.first}</h6>
            <h6>Last Name: {singlePerson.last}</h6>
            <h6>Age: {singlePerson.age}</h6>
          </div> :
          <div/>
        }

      <HighchartsReact
        highcharts={Highcharts}
        constructorType="stockChart"
        options={options}
        />
      </div>
    );
  }
};

export default SingleRow;
