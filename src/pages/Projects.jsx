import React from "react";
import Card from "../components/Card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Todo List",
      description: "Reactjs, HTML, CSS, Javascript",
      btnText: "GitHub",
      url: "https://github.com/yash2500/Reactjs-Projects/tree/master/Quiz-App",
    },
    {
      id: 2,
      title: "Ecommerce",
      description: "Reactjs, HTML, CSS, Javascript",
      btnText: "GitHub",
      url: "https://github.com/yash2500/Reactjs-Projects/tree/master/Dynamic%20CSS%20Generator",
    },
    {
      id: 3,
      title: "CRUD",
      description: "Reactjs, HTML, CSS, Javascript",
      btnText: "GitHub",
      url: "https://github.com/yash2500/Reactjs-Projects/tree/master/CRUD%20Using%20React-Redux",
    },
    {
      id: 1,
      title: "Todo List",
      description: "Reactjs, HTML, CSS, Javascript",
      btnText: "GitHub",
      url: "https://github.com/yash2500/Reactjs-Projects/tree/master/Quiz-App",
    },
    {
      id: 2,
      title: "Ecommerce",
      description: "Reactjs, HTML, CSS, Javascript",
      btnText: "GitHub",
      url: "https://github.com/yash2500/Reactjs-Projects/tree/master/Dynamic%20CSS%20Generator",
    },
    {
      id: 3,
      title: "CRUD",
      description: "Reactjs, HTML, CSS, Javascript",
      btnText: "GitHub",
      url: "https://github.com/yash2500/Reactjs-Projects/tree/master/CRUD%20Using%20React-Redux",
    },
  ];

  return (
    <div>
      <h1 className='heading flex items-center justify-center'>My Work</h1>
      <div className="card-grid">
        {projects.map((project) => {
          const { id, title, description, btnText, url } = project;
          return (
            <Card
              id={id}
              title={title}
              description={description}
              btnText={btnText}
              url={url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
