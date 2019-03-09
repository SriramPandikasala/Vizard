import React, { Component } from 'react'
import "./Chart.css"

import CanvasJSReact from '../canvasjs.react'
//var CanvasJSReact = require('../canvasjs.react');
//var CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;




class Chart extends Component {
    render() {

        const visitDate = this.props.visitDate;

        //check whether there is any key in the JSON given if not working visitorList.visitorList
        const visitorList = this.props.visitorList.visitorList;
        const totVisitor = Object.keys(visitorList).filter(visit => {
            return new Date(visitorList[visit].visitDate).toDateString() === new Date(visitDate).toDateString()
        })
        const inVisitors = totVisitor.filter(visit => visitorList[visit].isCheckin).length


        const options = {
            title: {
                text: "Visitor Count Graph"
            },
            data: [{
                type: "column",
                dataPoints: [
                    { label: "Total", y: totVisitor.length },
                    { label: "Checked-In", y: inVisitors },
                ]
            }]
        }
        const containerProps = { width: "300px", height: "200px", position: "static" }

        return (
            <div className="col-4 chart">
                <CanvasJSReact.CanvasJSChart options={options} containerProps={containerProps} />
                {/* onRef = {ref => this.chart = ref} */}

            </div>
        );
    }
}

export default Chart