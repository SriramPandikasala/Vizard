import React, { Component } from 'react'

import Calendar from 'react-calendar';
import './visitCalendar.css'


class VisitCalendar extends Component {




    render() {
        const visitDate = this.props.visitDate
        return (
            <div className="col-6 cal">
                <Calendar
                    activeStartDate={visitDate}
                    onChange={(date) => {
                        this.props.changeVisitDate(date)
                    }}
                    value={visitDate}

                />
            </div>
        );
    }
}

export default VisitCalendar;
