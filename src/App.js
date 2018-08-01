import React, { Component } from 'react';
import './App.css';
import MainListings from './components/MainListings';
import FavoriteListings from './components/FavoriteListings';
import RealtyProvider from './providers/RealtyProvider';
import Filter from './components/Filter';
import { Loader } from 'semantic-ui-react'
import { Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

class App extends Component {

  constructor(props) {
    
    super(props)

    this.state = {
      realtyData: [],
      filter: {
        option: "id",
        searchTerm: ""
      },
      favorites: new Set(),
      visible: false
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
          return listing[filterOption].toString().includes(searchTerm)
      });
    }
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

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    const listingsToDisplay = this.filterListings();
    const favoritesToDisplay = this.getFavoriteListings();

    if(!this.state.realtyData.length){
      return <Loader size="large" active>Fetching Data</Loader>
    } else {
      return (
        <div className="App">
        <Button onClick={this.handleButtonClick}>Toggle visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>  

          <Sidebar.Pusher dimmed={this.state.visible}>
          <h1>Realtor App</h1>
          <Filter updateFilter={this.updateFilter}/>
          <MainListings listings={listingsToDisplay} favorites={this.state.favorites} toggleFavorites={this.toggleFavorites}/>
          <h1>Favorites</h1>
          <FavoriteListings listings={favoritesToDisplay} toggleFavorites={this.toggleFavorites}/>
          </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      );
    }
  }
}

export default App;
