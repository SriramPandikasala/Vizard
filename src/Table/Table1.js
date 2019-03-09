import React, { Component } from 'react';
import './Table.css'
import ReactTable from "react-table";
import 'react-table/react-table.css'


class VisitorTable extends Component {

    render() {
        const data = this.props

        const columns = [{
            Header: 'Visitor Name',
            accessor: 'name',// String-based value accessors!
            Cell: props => {
                if (typeof (props.value) === "object") {
                    return (
                        <div>
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {props.value[0]} ....
                        </button>

                            <ul className="dropdown-menu">
                                {props.value.map((val, key) => <li key={key} className="dropdown-item">{val}</li>)}
                            </ul>
                        </div>)

                }
                return <span className='number'>{props.value}</span>
            }
        },
        {
            Header: 'Visitor Type',
            accessor: 'visitorType' // String-based value accessors!
        },

        {
            Header: 'Approver Name',
            accessor: 'refEmployeeName' // String-based value accessors!
        },
        {
            Header: 'Purpose',
            accessor: 'purpose',
            Cell: props => {
                if (props.value) {
                    return <span className='number'>{props.value}</span>
                }
                return "N.A."

            }


        },
        {
            Header: 'Check-In Date',
            accessor: 'visitDate' // String-based value accessors!
        },

        {
            Header: 'In Time',
            accessor: 'checkInTime',
            Cell: props => {
                if (props.original.isCheckin) {
                    return <span className='number'>{props.value}</span>
                }
                return "-"

            } // Custom cell components!
        },
        {
            Header: 'Out Time',
            accessor: 'checkOutTime',
            Cell: props => {
                if (props.original.isCheckin) {
                    return <span className='number'>{props.value}</span>
                }
                return "-"

            } // Custom cell components!
        }]
        // console.log(visitor.visitorList.map(v => v));
        // return (
        //     <table class="table table-dark" >
        //         <thead colspan="3">
        //             <tr>{Object.keys(visitor.visitorList[0]).map((v, key1) => <td key={key1}>{v}</td>)}</tr>

        //         </thead>
        //         <tbody colspan="3">
        //             {visitor.visitorList.map((visit, key) =>
        //                 <tr>
        //                     {Object.keys(visit).map((v, key1) => <td key={key1}>{visit[v]}</td>)}
        //                 </tr>
        //             )}

        //         </tbody>



        //     </table >
        //)
        return (
            <div className="col-12">
                <ReactTable
                    data={data.visitorList}
                    columns={columns}
                    pageSize={5}
                />

            </div>)
    }
}

export default VisitorTable;