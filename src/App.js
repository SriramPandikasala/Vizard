import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import VisitorTable from "./Table/Table1";
import VisitCalendar from "./Calendar/VisitCalendar"

import Chart from './Chart/Chart'
//import CardDiv from "./Card/CardDiv"
import Search from "./Table/Search"

import Navbar from './NavBar/Navbar'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      visitDate: new Date(),
      // visitorList: {
      //   "visitorList": [
      //     {
      //       "name": ["aaaa", "yyyy", "xxxx"],
      //       "visitorType": "interviewee",
      //       "refEmployeeName": "hr1",
      //       "purpose": "interview",
      //       "isCheckin": true,
      //       "visitDate": "03-08-2019",
      //       "checkInTime": "08:59",
      //       "checkOutTime": "23:59"
      //     },
      //     {
      //       "name": "bbbb",
      //       "visitorType": "lostId",

      //       "refEmployeeName": "hr2",
      //       "isCheckin": false,
      //       "visitDate": "03-08-2019"
      //     },
      //     {
      //       "name": "cccc",
      //       "visitorType": "Visitor",
      //       "refEmployeeName": "hr3",
      //       "purpose": "visit",
      //       "isCheckin": true,
      //       "visitDate": "03-08-2019",
      //       "checkInTime": "08:59",
      //       "checkOutTime": "23:59"
      //     },
      //     {
      //       "name": "dddd",
      //       "visitorType": "VIP",
      //       "refEmployeeName": "hr4",
      //       "purpose": "visit",
      //       "isCheckin": false,
      //       "visitDate": "03-08-2019"
      //     },
      //     {
      //       "name": "eeee",
      //       "visitorType": "Family",
      //       "refEmployeeName": "hr5",
      //       "purpose": "family outing",

      //       "isCheckin": true,
      //       "visitDate": "03-08-2019",
      //       "checkInTime": "08:59",
      //       "checkOutTime": "23:59"
      //     },
      //     {
      //       "name": "ffff",
      //       "visitorType": "Conference",
      //       "purpose": "conference",

      //       "refEmployeeName": "hr6",
      //       "isCheckin": false,
      //       "visitDate": "03-08-2019"
      //     },
      //     {
      //       "name": "gggg",
      //       "visitorType": "Client",
      //       "refEmployeeName": "hr7",
      //       "isCheckin": true,
      //       "visitDate": "03-08-2019",
      //       "checkInTime": "08:59",
      //       "checkOutTime": "23:59"
      //     },
      //     {
      //       "name": "hhhh",
      //       "visitorType": "vendor",
      //       "refEmployeeName": "hr8",
      //       "isCheckin": false,
      //       "visitDate": "03-09-2019"
      //     },
      //     {
      //       "name": "iiii",
      //       "visitorType": "interviewee",
      //       "purpose": "interview",

      //       "refEmployeeName": "hr9",
      //       "isCheckin": true,
      //       "visitDate": "03-09-2019",
      //       "checkInTime": "08:59",
      //       "checkOutTime": "23:59"
      //     },
      //     {
      //       "name": "jjjj",
      //       "visitorType": "guest",
      //       "purpose": "visit",

      //       "refEmployeeName": "hr10",
      //       "isCheckin": false,
      //       "visitDate": "03-10-2019"
      //     },
      //     {
      //       "name": "kkkk",
      //       "visitorType": "Visitor",
      //       "refEmployeeName": "hr11",
      //       "purpose": "visit",

      //       "isCheckin": true,
      //       "visitDate": "03-08-2019",
      //       "checkInTime": "08:59",
      //       "checkOutTime": "23:59"
      //     },
      //     {
      //       "name": "llll",
      //       "visitorType": "VIP",
      //       "purpose": "visit",

      //       "refEmployeeName": "hr12",
      //       "isCheckin": false,
      //       "visitDate": "03-09-2019"
      //     },
      //     {
      //       "name": "mmmm",
      //       "visitorType": "Family",
      //       "refEmployeeName": "hr13",
      //       "purpose": "Outing",

      //       "isCheckin": true,
      //       "visitDate": "03-08-2019",
      //       "checkInTime": "08:59",
      //       "checkOutTime": "23:59"
      //     },
      //     {
      //       "name": "nnnn",
      //       "visitorType": "Conference",
      //       "purpose": "Conference",

      //       "refEmployeeName": "hr14",
      //       "isCheckin": false,
      //       "visitDate": "03-09-2019"
      //     },
      //     {
      //       "name": "oooo",
      //       "visitorType": "Client",
      //       "refEmployeeName": "hr15",
      //       "isCheckin": true,
      //       "visitDate": "03-08-2019",
      //       "checkInTime": "08:59",
      //       "checkOutTime": "23:59"
      //     },
      //     {
      //       "name": "pppp",
      //       "visitorType": "vendor",
      //       "refEmployeeName": "hr16",
      //       "isCheckin": false,
      //       "visitDate": "03-09-2019"
      //     },
      //   ]
      // }
    }
  }


  handleChangeDate = (changedDate) => {
    this.setState({ visitDate: changedDate })
    this.renderObject("date", changedDate)

  }
  handleSearchChange = (searchValue) => {
    this.setState({ searchValue: searchValue })
    this.renderObject("search", searchValue)
  }

  componentDidMount() {
    console.log(this.state.visitorList)
    fetch('http://192.168.43.179:8080/getDetailsAdmin')
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        this.setState({ visitorList: myJson })
      });
    this.renderObject("date", this.state.visitDate)
  }
  renderObject = (type, value) => {
    var newObj = this.state.visitorList
    if (type === "search") {

      if (value !== "") {
        newObj = { "visitorList": [] }
        let temp = this.state.visitorList.visitorList
        console.log("temp", temp)
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].name.includes(value) || temp[i].name.includes(value) || temp[i].refEmployeeName.includes(value) || temp[i].visitorType.includes(value)) {
            newObj.visitorList.push(temp[i])
          }
        }
      }
    }
    else if (type === "date") {
      {
        newObj = { "visitorList": [] }
        let temp = this.state.visitorList.visitorList
        console.log(new Date(value).toDateString())
        for (let i = 0; i < temp.length; i++) {
          if (new Date(temp[i].visitDate).toDateString() === new Date(value).toDateString()) {
            newObj.visitorList.push(temp[i])
          }
        }
      }

    }


    this.setState({ newObj: newObj })

  }


  render() {
    console.log(this.state.visitorList)
    var newObj = this.state.newObj ? this.state.newObj : this.state.visitorList

    return (
      <div className="App">

        <Navbar></Navbar>


        <div className="container-fluid">

          <div className="row first-container">
            <VisitCalendar  {...this.state} changeVisitDate={(changedDate) => this.handleChangeDate(changedDate)} />
            <Chart {...this.state} />

          </div>
          <div className="row second-container">
            <Search saveSearch={(searchValue) => this.handleSearchChange(searchValue)} />
            <div><span></span></div>
            {/* <CardDiv {...this.state} className="cardDiv" /> */}
            <VisitorTable  {...newObj} />
          </div>
        </div>


      </div>
    );
  }
}

export default App;
