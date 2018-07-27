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
            selectedFilterOption: "id",
        }
    }

    updateFilterOption = (selectedOption) => {
        this.setState({selectedFilterOption: selectedOption})
    }

    render() {
        return (
        <div id="Filter">
            <Input
            label={<Dropdown id="filterOption" defaultValue={this.state.selectedFilterOption} options={filterOptions} onChange={(e, {value}) => this.updateFilterOption(value)}/>}
            labelPosition='left'
            placeholder='Filter'
            onChange={(e, {value}) => this.props.updateFilter(this.state.selectedFilterOption, value)}
            />
        </div>
        )
    }

}