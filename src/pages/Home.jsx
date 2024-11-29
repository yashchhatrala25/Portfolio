import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="home-container flex justify-center items-center box-container">
      <h2 className="home-name">Yash Chhatrala</h2>
      <h1 className="home-des">
        I'm a Software
        <span>Developer</span>
      </h1>
      <p className="home-pera">
        Looking forward to an opportunity to work in a dynamic, challenging
        environment where I can utilize my skills for developing my career and
        for the growth of the organization.
      </p>
      <Button className="mt-20" title="Download CV" />
    </div>
  );
};

export default Home;
