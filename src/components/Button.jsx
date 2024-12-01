import React from 'react'

const Button = (props) => {
  function handleClick() {
    const pdfUrl = "https://drive.google.com/file/d/1FXlhzRaGFHtRluygRUxF25qfTC30KzzP/view?usp=drive_link";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Yash_Chhatrala_CV.pdf"; // specify the filename
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
