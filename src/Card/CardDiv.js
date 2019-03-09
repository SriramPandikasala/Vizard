import React, { Component } from 'react';
import Card from './Card'
import "./CardDiv.css"
class CardDiv extends Component {
    // visitorDetails = this.props.visitorDetails
    // date = this.props.visitDate;

    // totVisit = Object.keys(visitorDetails).filter(each => new Date(each["visitDate"]).toLocaleDateString() === new Date(date).toLocaleDateString())
    render() {
        const visitDate = this.props.visitDate;

        //check whether there is any key in the JSON given if not working visitorList.visitorList
        const visitorList = this.props.visitorList.visitorList;
        const totVisitor = Object.keys(visitorList).filter(visit => {
            return new Date(visitorList[visit].visitDate).toDateString() === new Date(visitDate).toDateString()
        })
        const inVisitors = totVisitor.filter(visit => visitorList[visit].isCheckin).length
        console.log(totVisitor)
        return (
            <React.Fragment>
                <Card count={totVisitor.length} desc="Total Visitors" />
                <Card count={inVisitors} desc="Checked-In Visitors" />
            </React.Fragment>


        )
    }
}

export default CardDiv
