import React from "react";
import Card from "../components/Card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DSA",
      description: "C++, DataStructure",
      btnText: "GitHub",
      url: "https://github.com/yashchhatrala25/DSA_A_to_Z",
    },
    {
      id: 2,
      title: "Instagram-Clone",
      description: "Reactjs, HTML, CSS, Javascript",
      btnText: "GitHub",
      url: "https://github.com/yashchhatrala25/insta-clone",
    },
    {
      id: 3,
      title: "Python for DataScience",
      description: "Python, DataStructure",
      btnText: "GitHub",
      url: "https://github.com/yashchhatrala25/python-data-science",
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
