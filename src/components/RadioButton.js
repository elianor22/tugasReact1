import React from "react";

export default function RadioButton({ data }) {
  return data.map((radio, index) => {
    return (
      <div key={index}>
        <h5>{radio.soal}</h5>

        {radio.items.map((item, index2) => (
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
            </label>
          </div>
        ))}
      </div>
    );
  });
}
