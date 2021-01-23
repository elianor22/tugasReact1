
import React from "react";

// data yang di dapatkan dari home.js dan berisikan data dari json
// lalu proses looping data

export default function CheckBox({ data }) {

  return data.map((checkBox, index) => {
    return (
      <div key={index}>
        <h5 className="mb-3 mt-3">{checkBox.soal}</h5>

        {checkBox.items.map((check,index2) => (
            // looping data items
            
          <div className="form-check" key={index2}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id={check+index2+1}
            />
            <label className="form-check-label" htmlFor={check+index2+1}>
              {check.a}
            </label>
          </div>
        ))}
      </div>
    );
  });
}
