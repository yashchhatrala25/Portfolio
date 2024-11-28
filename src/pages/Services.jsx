import React from "react";
import Card from "../components/Card";

const Services = () => {
  const cardArr = [
    {
      id: 0,
      title: "Web Developing",
      description: "Description One",
      btnText: "My Work",
    },
    {
      id: 1,
      title: "Graphic Designing",
      description: "Description Two",
      btnText: "My Work",
    },
    {
      id: 2,
      title: "Ethical Hacking",
      description: "Description Three",
      btnText: "My Work",
    },
  ];

  return (
    <div>
      <h1 className='heading flex items-center justify-center'>Our Services</h1>
      <div className="card-grid">
        {cardArr.map((card) => {
          return (
            <Card
              id={card.id}
              title={card.title}
              description={card.description}
              btnText={card.btnText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
