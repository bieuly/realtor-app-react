import React, { Component } from 'react'
import { Table, Checkbox } from 'semantic-ui-react'
import Filter from './Filter';

export default class FavoriteListings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterOption: "id",
            searchTerm: ""
        }
    }

    updateFilter = (option, searchTerm) => {
        this.setState({
          filterOption: option,
          searchTerm: searchTerm
        })
      }

    filterListings = () => {
        let filterOption = this.state.filterOption;
        let searchTerm = this.state.searchTerm;

        if(searchTerm == "") {
        return this.props.listings
        }
        if(filterOption && searchTerm) {
        return this.props.listings.filter((listing)=>{
            return listing[filterOption].toString().includes(searchTerm)
        });
        }
    }   

    render() {
        let listings = [];
        if(this.props.listings){
            listings = this.filterListings().map((listing)=>
            <Table.Row key={listing.id}>
                <Table.Cell>{listing.id}</Table.Cell>
                <Table.Cell>{listing.price}</Table.Cell>
                <Table.Cell>{listing.bedrooms}</Table.Cell>
                <Table.Cell>{listing.bathrooms}</Table.Cell>
                <Table.Cell>{listing.stories}</Table.Cell>
                <Table.Cell>{listing.type}</Table.Cell>
                <Table.Cell>{listing.year}</Table.Cell>
                <Table.Cell><Checkbox id={listing.id} onChange={()=>this.props.toggleFavorites(listing.id)} defaultChecked={true}/></Table.Cell>
            </Table.Row>
        )}
        return (
            <div id="FavoriteListings">
            <Filter updateFilter={this.updateFilter}/>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Bedrooms</Table.HeaderCell>
                    <Table.HeaderCell>Bathrooms</Table.HeaderCell>
                    <Table.HeaderCell>Stories</Table.HeaderCell>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                    <Table.HeaderCell>Year</Table.HeaderCell>
                    <Table.HeaderCell>Favorite</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
    
                <Table.Body>
                    {listings}
                </Table.Body>
            </Table>
            </div>
        ); 
    }
}