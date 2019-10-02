import React, { Component } from "react";
import axios from "axios";
import Details from "./Article/Details";

class Search extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    this.state = {
      data: [],
      value: this.props.default
    };
    this.onChange = this.onChange.bind(this);
    this.apiUrl =
      "https://newsapi.org/v2/sources?language=en&apiKey=4ff154700693410384494d4e7ddfbe13";
  }
  // Handle the Select Change from the Select Options
  onChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  //Get News SOurces from the API
  componentDidMount() {
    axios.get(this.apiUrl).then(response => {
      let sourcesData = response.data;
      this.setState({ data: sourcesData.sources });
    });
    console.log(this.state.data);
  }

  // Render Method
  render() {
    const allSources = this.state.data;
    return (
      <div>
        <div className="row text-center">
          <div className="col-lg-12">
            <select value={this.state.value} onChange={this.onChange}>
              {Object.keys(allSources).map(paper => (
                <option key={paper} value={allSources[paper].id}>
                  {allSources[paper].name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <br />
          <Details default={this.state.value} />
        </div>
      </div>
    );
  }
}

export default Search;
