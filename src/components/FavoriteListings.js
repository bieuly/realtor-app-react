import React from 'react'
import { Table, Checkbox } from 'semantic-ui-react'

const FavoriteListings = (props) => {

    let listings = [];
    if(props.listings){
        listings = props.listings.map((listing)=>
        <Table.Row key={listing.id}>
            <Table.Cell>{listing.id}</Table.Cell>
            <Table.Cell>{listing.price}</Table.Cell>
            <Table.Cell>{listing.bedrooms}</Table.Cell>
            <Table.Cell>{listing.bathrooms}</Table.Cell>
            <Table.Cell>{listing.stories}</Table.Cell>
            <Table.Cell>{listing.type}</Table.Cell>
            <Table.Cell>{listing.year}</Table.Cell>
            <Table.Cell><Checkbox id={listing.id} onChange={()=>props.toggleFavorites(listing.id)} defaultChecked={true}/></Table.Cell>
        </Table.Row>
    )} 

    return (
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
    );
}

export default FavoriteListings;