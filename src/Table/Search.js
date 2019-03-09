import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
    render() {
        return (
            <div className="col-4 search">
                <form className="form-inline my-2 my-lg-0 search">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => this.props.saveSearch(event.target.value)} />
                    <i className="fas fa-search searchBut" onClick={(event) => this.props.saveSearch(event.target.value)} ></i>
                    {/* <button className="btn btn-outline-success searchBut" onClick={(event) => this.props.saveSearch(event.target.value)} >Search</button> */}
                </form>
            </div>


        )
    }
}

export default Search
