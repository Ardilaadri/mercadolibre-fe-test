import React, { Component } from "react";
import Item from "./Item";

class Products extends Component {
  state = {
    data: {},
  };

  fetchProducts = async () => {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${this.props.query}`
    );

    const data = await response.json();

    this.setState({
      data: data.results,
    });
  };

  render() {
    const items = [];

    for (let i = 0; i < 4; i++) {
      items.push(
        <Item
          key={i}
          title={this.state.data[i]?.title}
          price={this.state.data[i]?.price}
          picture={this.state.data[i]?.thumbnail}
          city_name={this.state.data[i]?.address.city_name}
        />
      );
    }
    return <>{items}</>;
  }
}

export default Products;
