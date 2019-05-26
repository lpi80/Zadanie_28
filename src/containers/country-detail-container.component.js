import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentational/country-details.component';

class CountryDetailsContainer extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const { dispatch, params } = this.props;
        dispatch(getCountry(params.id));
    }

    render() {
        return (
            <CountryDetails country={this.props.selectedCountry} />
        )
    }
}

const mapStateToProps = (store) => ({selectedCountry: store.countriesReducer.selectedCountry});

export default connect(mapStateToProps)(CountryDetailsContainer);