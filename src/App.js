import React, { Component } from 'react';
import './App.css';
import MainListings from './components/MainListings';
import FavoriteListings from './components/FavoriteListings';
import RealtyProvider from './providers/RealtyProvider';
import Filter from './components/Filter';

class App extends Component {

  constructor(props) {
    
    super(props)

    const favorites = new Set();

    this.state = {
      realtyData: [],
      filter: {
        option: "id",
        searchTerm: ""
      },
      favorites: favorites
    }

    this.realtyProvider = new RealtyProvider();
  }

  componentDidMount() {
    this.realtyProvider.getRealtyData().then(data=>{
      this.setState({realtyData: data})
    });
  }

  updateFilter = (option, searchTerm) => {
    this.setState({
      filter: {
        option: option,
        searchTerm: searchTerm
      }
    })
  }

  filterListings = () => {
    let filterOption = this.state.filter.option;
    let searchTerm = this.state.filter.searchTerm;

    if(searchTerm == "") {
      return this.state.realtyData
    }
    if(filterOption && searchTerm) {
      return this.state.realtyData.filter((listing)=>{
          return listing[filterOption].toString().includes(searchTerm) ? true : false
      });
    }
  }

  render() {

    const listingsToDisplay = this.filterListings();

    return (
      <div className="App">
        <h1>Realtor App</h1>
        <Filter updateFilter={this.updateFilter}/>
        <MainListings data={listingsToDisplay}/>
        <hr/>
      </div>
    );
  }
}

export default App;
