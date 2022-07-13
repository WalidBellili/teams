import React, { Component } from "react";
import users from "./teams.json";
import TeamsInfos from "./components/TeamsInfos";
import Counter from "./components/Counter";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  handleMinusClick = () => {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  handlePlusClick = () => {
    if (this.state.count < users.length) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  };
  render() {
    return (
      <div className="card-container">
        <div className="counter">
          <Counter
            count={this.state.count}
            increment={this.handlePlusClick}
            substract={this.handleMinusClick}
          />
        </div>
        <article className="card">
          {users
            .filter((user, index) => {
              return index < this.state.count;
            })

            .map((user) => {
              return (
                <div>
                  <div>
                    <TeamsInfos
                      logo={user.crestUrl}
                      shortName={user.shortName}
                      venue={user.venue}
                      adress={user.address}
                      email={user.email}
                      founded={user.founded}
                    />
                  </div>
                </div>
              );
            })}
        </article>
      </div>
    );
  }
}

export default App;
