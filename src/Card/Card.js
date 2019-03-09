import React, { Component } from 'react'
import './card1.css'

class Card extends Component {
    render() {
        const { count, desc } = this.props
        return (
            <div className="col-2 card1">
                <div className="card-img-top">{count}</div>
                <div className="card-body1">{desc}</div>
            </div>

        )
    }
}

export default Card
