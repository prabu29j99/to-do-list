import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="" value={this.props.searchWord} onChange={this.props.onChange.bind(this)} />
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>

        )
    }
}

export default SearchBar
