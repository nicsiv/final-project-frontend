import React, { Component } from "react";

class Search extends Component {

  render(){
    return (
        <div className="search-bar">
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search Rooms..."}
          onChange={this.props.filtered}
        />
        <i className="circular search link icon"></i>
      </div>
      </div>
    );
  }
};

export default Search;