import React, { Component } from "react";

class TeamsInfos extends Component {
  render() {
    return (
      <div className="container text-align-center">
        <section className="d-flex flex-wrap">
          <img src={this.props.logo} alt="" width={"100px"} height={"100px"} />
          <article>
            <h2>{this.props.shortName}</h2>
            <p>{this.props.venue}</p>
            <p>{this.props.address}</p>
            <p>{this.props.email}</p>
            <p>{this.props.founded}</p>
          </article>
        </section>
      </div>
    );
  }
}

export default TeamsInfos;
