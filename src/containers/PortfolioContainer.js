import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.stocks.map(el => <Stock key={el.id} stock={el} stockAction={this.props.sellStocksClick}/>)}
      </div>
    );
  }

}

export default PortfolioContainer;
