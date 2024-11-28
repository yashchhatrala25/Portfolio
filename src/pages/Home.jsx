import React from "react";
import Button from "../components/Button";

const Home = () => {

  return (
    <div className="home-container flex justify-center items-center box-container">
      <h2 className="home-name">Yash Chhatrala</h2>
      <h1 className="home-des">
        I'm a Web
        <span>Developer</span>
      </h1>
      <p className="home-pera">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic
        doloremque enim odio a illum nostrum nemo saepe voluptatem facilis?
        Modi, adipisci necessitatibus aliquam nihil impedit quo corrupti nostrum
        temporibus!
      </p>
      <Button className="mt-20" title="Download CV" />
    </div>
  );
};

export default Home;
