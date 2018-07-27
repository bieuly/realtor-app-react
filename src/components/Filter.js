import React, { Component } from 'react';
import { Dropdown, Input } from 'semantic-ui-react';

const filterOptions = [
    { key: 'id', text: 'ID', value: 'id' },
    { key: 'price', text: 'Price', value: 'price' },
    { key: 'bedrooms', text: 'Bedrooms', value: 'bedrooms' },
    { key: 'bathrooms', text: 'Bathrooms', value: 'bathrooms' },
    { key: 'stories', text: 'Stories', value: 'stories' },
    { key: 'type', text: 'Type', value: 'type' },
    { key: 'year', text: 'Year', value: 'year' },
];

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterOption: "id",
            searchTerm: ""
        }
    }

    updateFilterOption = (selectedOption) => {
        this.setState({filterOption: selectedOption})
        this.props.updateFilter(selectedOption, this.state.searchTerm);
    }

    updateFilterSearchTerm = (searchTerm) => {
        this.setState({searchTerm: searchTerm})
        this.props.updateFilter(this.state.filterOption, searchTerm);
    }

    render() {
        return (
        <div id="Filter">
            <Input
            label={<Dropdown id="filterOption" defaultValue={this.state.filterOption} options={filterOptions} onChange={(e, {value}) => this.updateFilterOption(value)}/>}
            labelPosition='left'
            placeholder='Filter'
            onChange={(e, {value}) => this.updateFilterSearchTerm(value)}
            />
        </div>
        )
    }

}