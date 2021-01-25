import React from "react";



// data yang di dapatkan dari home.js dan berisikan data dari json
// lalu proses looping data

export default function RadioButton({ data }) {
  return data.map((radio, index) => {
    return (
      <div key={index}>
        <h5>{radio.soal}</h5>

        {radio.items.map((item, index2) => (
            // looping data items
            
          <div className="form-check" key={index2}>
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id={item+index2}
              value="option1"
            />
            <label className="form-check-label" htmlFor={item+index2}>
            {item.a}
            {item.b}
            {item.c}
            {item.d}
            </label>
          </div>
        ))}
      </div>
    );
  });
}
