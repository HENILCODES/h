import React, { Component } from 'react'
import Navbar from './components/Navbar'

class App extends Component {
  stddata = [
    {
    "_id": { "$oid": "62cc1a9865437e4064b3be82" },
    "SPID": 2.019039816e9,
    "GENDER": "M",
    "STUDENT_NAME": "DUBEY PRASHANT DHIRAJ",
    "ACADEMIC_BATCH": "B.C.A 2019-22",
    "SYLLABUS_ACADEMIC_BATCH": "B.C.A 2020-23",
    "RESULT": "PASS",
    "SGPA": 7.52,
    "YGPA": 7.11,
    "CLASS": "FIRST DIST",
    "SUBJECTS_MARKS": {
      "INFO_SYS": 76.0,
      "IOT": 77.0,
      "JAVA": 61.0,
      "VBNET": 64.0,
      "WEB_DES_2": 91.0,
      "PRACT": 179.0
    },
    "EXAM_TOTAL": 548.0
  },
  {
    "_id": { "$oid": "62cc362d06ae98769932a633" },
    "SPID": 2.020025696e9,
    "GENDER": "M",
    "STUDENT_NAME": "BHANUSHALI YASH HARESH",
    "ACADEMIC_BATCH": "B.C.A 2020-23",
    "SYLLABUS_ACADEMIC_BATCH": "B.C.A 2020-23",
    "RESULT": "PASS",
    "SGPA": 6.48,
    "YGPA": 6.41,
    "CLASS": "FIRST",
    "SUBJECTS_MARKS": {
      "INFO_SYS": 57.0,
      "IOT": 52.0,
      "JAVA": 57.0,
      "VBNET": 62.0,
      "WEB_DES_2": 71.0,
      "PRACT": 142.0
    },
    "EXAM_TOTAL": 441.0
  }]
  constructor(){
    super();
    console.log("Appp Class Constructor");
    this.state = {
      stddata : this.stddata
    }
    this.fetchText();
  }
  async fetchText() {
    let response = await fetch('/data.json');
    let data = await response.text();
    console.log(data);
  }

  render() {
    return (
      <div className='a'>
        {this.state.stddata.map((element)=>{ 
         return <h1 key={element.SPID}>h {element.SPID}</h1>
        })}    
        <Navbar/>
      </div>
    )
  }
}

export default App
