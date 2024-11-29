import React from "react";

const education = [
  {
    id: 1,
    collegeName: "Lukhdhirji Engineering College Morbi.",
    cgpa: "7.41",
    year_of_passout: "2019",
  },
  {
    id: 2,
    collegeName: "B.H.Gardi College of Engineering and Technology Rajkot.",
    cgpa: "8.87",
    year_of_passout: "2022",
  },
];

const experience = [
  {
    id: 1,
    companyName: "Radixweb pvt. ltd.",
    years: "9 months",
    desc: "Here Write Description",
  },
  {
    id: 2,
    companyName: "NexusLink pvt. ltd.",
    years: "1 Year",
    desc: "Here Write Description",
  },
  {
    id: 3,
    companyName: "Sky9 pvt. ltd.",
    years: "11 months present",
    desc: "Here Write Description",
  },
];

const About = () => {
  return (
    <React.Fragment>
      <h1 className="heading flex items-center justify-center">About Me</h1>
      <div className="about box-container">
        <h1 className="mb-20">Education</h1>
        {education?.map((educ) => {
          return (
            <div className="about-education-box">
              <h2 className="mt-20 bold">{educ.collegeName}</h2>
              <p>- {educ.cgpa} CGPA</p>
              <p>- {educ.year_of_passout}</p>
            </div>
          );
        })}
      </div>

      <div className="about box-container">
        <div className="about-skill-box">
          <h1 className='mb-20'>Skills</h1>
          <h3 className="about-skill-heading">Frontend</h3>
          <ul className='flex'>
            <li>Javascript,</li>
            <li>Reactjs,</li>
            <li>Redux,</li>
            <li>Nextjs13,</li>
            <li>Typescript</li>
          </ul>
          <h3 className="about-skill-heading">Backend</h3>
          <ul className='flex'>
            <li>Nodejs,</li>
            <li>Expressjs,</li>
            <li>Typescript</li>
          </ul>
          <h3 className="about-skill-heading">Database</h3>
          <ul className='flex'>
            <li>mySql,</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>

      <div className="about box-container">
        <h1 className='mb-20'>Experience</h1>
        {experience?.map((expe) => {
          return (
            <div className="about-experience-box">
              <h2>{expe.companyName}</h2>
              <p>- {expe.years}</p>
              <p>- {expe.desc}</p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default About;
