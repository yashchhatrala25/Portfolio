import React from 'react'

const Button = (props) => {
  function handleClick() {
    const pdfUrl = "../assets/sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }
  return (
    <button className={props.className} onClick={handleClick}>
      {props.title}
    </button>
  )
}

export default Button
