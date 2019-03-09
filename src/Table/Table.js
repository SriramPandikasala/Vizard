import React, { Component } from 'react'
import ReactTable from "react-table";
import 'react-table/react-table.css'

class VisitorTable extends Component {
    render() {
        const data = [{
            name: ['Tanner Linsley', "aaa", 'Tanner Linsley', "aaa"],
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }, {
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }, {
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }, {
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }, {
            name: 'Tanner Linsley',
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }, {
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
            }
        }]

        const columns = [{
            Header: 'Name',
            accessor: 'name',
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
        }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => {
                //console.log(props)
                if (props.value) {
                    return <span className='number'>{props.value}</span>
                }
                return "N.A."

            } // Custom cell components!
        }, {
            //id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: 'friend.name' // Custom value accessors!
        }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
        }]

        return <ReactTable
            data={data}
            columns={columns}

        />
    }
}

export default VisitorTable