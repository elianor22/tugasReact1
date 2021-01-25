import React, { Component } from "react";

// import components
import CheckBox from "../components/CheckBox";
import RadioButton from "../components/RadioButton";
import TextArea from "../components/TextArea";



// mengambil data dari jason
import DataJson from "../json/data.json";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          
            {/* data yang di ambil dari json lalu di lempar ke komponen masing2 */}
          <RadioButton data={DataJson.roadioButton} /> 
          <CheckBox data={DataJson.checkBox} />
          <TextArea data={DataJson.textArea} />
        </div>
      </div>
    );
  }
}
