import React from "react";


// data yang di dapatkan dari home.js dan berisikan data dari json
// lalu proses looping data
export default function TextArea({ data }) {
  return data.map((textArea, index) => {
    return (
      <div key={index}>
        <h5 className="mb-3 mt-3">{textArea.soal3}</h5>
        <textarea
          style={{ color: "#282c34" }}
          cols="60"
          rows="10"
          readOnly
          value={textArea.items}
        ></textarea>
      </div>
    );
  });
}
