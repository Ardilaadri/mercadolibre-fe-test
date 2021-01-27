import React, { Component } from "react";
import Products from "./Products";
import "../assets/styles/components/Searcher.scss";

class Searcher extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  state = {
    data: {},
    query: "",
  };

  handleInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
  };

  onClick = () => {
    this.child.current.fetchProducts();
  };

  render() {
    return (
      <>
        <section className="search">
          <div className="search-container">
            <div className="logo">
              <a href="google.com">
                <img
                  src="https://i.postimg.cc/YS1yRxGT/Logo-ML.png"
                  alt="logo"
                />
              </a>
            </div>
            <div className="search-input">
              <input
                type="text"
                placeholder="Nunca dejes de buscar"
                value={this.state.query}
                onChange={this.handleInputChange}
              />
              <div className="autocomplete"></div>
              <div className="icon" onClick={this.onClick}>
                <img
                  src="https://i.postimg.cc/3RYfcD2N/ic-Search.png"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </section>
        <Products query={this.state.query} ref={this.child} />
      </>
    );
  }
}

export default Searcher;
