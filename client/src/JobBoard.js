import React, { Component } from 'react';
import { JobList } from './JobList';
//const { jobs } = require('./fake-data');
import {loadJobs} from './requests.js'

export class JobBoard extends Component {
  constructor(props){
    super(props);
    //we need to set a initial value, bc while fetch is beign processed this.state will be loaded
    this.state = {jobs: []};
  }


//We load the fetch data when the component has been mounted, that is, displayed on the page. 
  async componentDidMount(){
    const jobs= await loadJobs();
    this.setState({jobs});

  }
  render() {
    const {jobs} = this.state;
    return (
      <div>
        <h1 className="title">Job Board</h1>
        <JobList jobs={jobs} />
      </div>
    );
  }
}
