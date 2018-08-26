import React, { Component } from 'react';
import './App.css';
import MainListings from './components/MainListings';
import FavoriteListings from './components/FavoriteListings';
import RealtyProvider from './providers/RealtyProvider';
import Filter from './components/Filter';
import { Tab, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { realtyDataFetch } from './actions/realtyDataActions'
import { toggleFavorite } from './actions/favoritesActions'

class App extends Component {

  componentDidMount() {
    const realtyProvider = new RealtyProvider();
    this.props.fetch(realtyProvider)
  }

  toggleFavorites = (id) => {
    if(!this.props.favorites.has(id)){
      this.props.toggleFavorite(id)
    }
  }

  getFavoriteListings = () => {
    const favorites = this.props.realtyData.filter((listing)=>{
        return this.props.favorites.has(listing.id)
      })
    return favorites;
  }

  render() {

    const panes = [
        { menuItem: 'Listings',render: () => <Tab.Pane attached={false}><MainListings listings={this.props.realtyData} favorites={this.props.favorites} toggleFavorites={this.toggleFavorites}/></Tab.Pane> },
        { menuItem: 'Favorites', render: () => <Tab.Pane attached={false}><FavoriteListings listings={this.getFavoriteListings()} toggleFavorites={this.toggleFavorites}/></Tab.Pane> },
      ]

    if(this.props.isLoading || !this.props.realtyData.length){
      return <Loader size="large" active>Fetching Data</Loader>
    } else if(this.props.realtyData.length) {
      return (
        <div className="App">
          <h1>Realtor App</h1>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (provider) => dispatch(realtyDataFetch(provider)),
    toggleFavorite: (id) => dispatch(toggleFavorite(id))
  }
}

const mapStateToProps = (state) => {
  return {
    realtyData: state.realtyData,
    isLoading: state.realtyDataIsLoading,
    hasErrored: state.realtyDataHasErrored,
    favorites: state.favorites,
    filter: state.filter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
