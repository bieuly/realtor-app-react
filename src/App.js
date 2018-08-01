import React, { Component } from 'react';
import './App.css';
import MainListings from './components/MainListings';
import FavoriteListings from './components/FavoriteListings';
import RealtyProvider from './providers/RealtyProvider';
import Filter from './components/Filter';
import { Tab, Loader } from 'semantic-ui-react'

class App extends Component {

  constructor(props) {
    
    super(props)

    this.state = {
      realtyData: [],
      favorites: new Set()
    }

    this.realtyProvider = new RealtyProvider();
  }

  componentDidMount() {
    this.realtyProvider.getRealtyData().then(data=>{
      this.setState({realtyData: data})
    });
  }

  toggleFavorites = (id) => {
    if(!this.state.favorites.has(id)){
      this.setState((prevState)=>{
        prevState.favorites.add(id)
        const newFavorites = new Set([...prevState.favorites])
        return {
          favorites: newFavorites
        }
      })
    } else {
      this.setState((prevState)=>{
        prevState.favorites.delete(id)
        const newFavorites = new Set([...prevState.favorites])
        return {
          favorites: newFavorites
        }
      })
    }
  }

  getFavoriteListings = () => {
    const favorites =  this.state.realtyData.filter((listing)=>{
        return this.state.favorites.has(listing.id)
      })
    return favorites;
  }

  render() {
    const favoritesToDisplay = this.getFavoriteListings();

    const panes = [
        { menuItem: 'Listings',render: () => <Tab.Pane attached={false}><MainListings listings={this.state.realtyData} favorites={this.state.favorites} toggleFavorites={this.toggleFavorites}/></Tab.Pane> },
        { menuItem: 'Favorites', render: () => <Tab.Pane attached={false}><FavoriteListings listings={favoritesToDisplay} toggleFavorites={this.toggleFavorites}/></Tab.Pane> },
      ]

    if(!this.state.realtyData.length){
      return <Loader size="large" active>Fetching Data</Loader>
    } else {
      return (
        <div className="App">
          <h1>Realtor App</h1>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          {/* <MainListings listings={this.state.realtyData} favorites={this.state.favorites} toggleFavorites={this.toggleFavorites}/> */}
          {/* <h1>Favorites</h1> */}
          {/* <FavoriteListings listings={favoritesToDisplay} toggleFavorites={this.toggleFavorites}/> */}
        </div>
      );
    }
  }
}

export default App;
