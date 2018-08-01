import React, { Component } from 'react';
import MainListings from './components/MainListings';
import FavoriteListings from './components/FavoriteListings';
import RealtyProvider from './providers/RealtyProvider';
import { Icon, Loader, Transition } from 'semantic-ui-react'

class RealtorApp extends Component {

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

    if(!this.state.realtyData.length){
      return <Transition animation="fade" transitionOnMount={true}><Loader size="large" active>Fetching Data</Loader></Transition>
    } else {
      return (
        <Transition animation="fade" transitionOnMount={true}>
        <div className="App">
          <h1>Make your Realty a Reality. <Icon name="building outline" size="large"/></h1>
          <MainListings listings={this.state.realtyData} favorites={this.state.favorites} toggleFavorites={this.toggleFavorites}/>
          <h1>Favorites</h1>
          <FavoriteListings listings={favoritesToDisplay} toggleFavorites={this.toggleFavorites}/>
        </div>
        </Transition>
      );
    }
  }
}

export default RealtorApp;
