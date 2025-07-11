"use client";
import SectionHeader from "@/components/SectionHeader";
import Team from "@/components/Team";
import React, { Fragment, useState } from "react";

const Experience = () => {
  const expList = [
    {
      id: 1,
      title: "Senior Software Developer",
      company: "Sky9 ITCraft Pvt Ltd",
      duration: "Feb-2024 to Current / Rajkot, India",
      description:
        "At Sky9 ITCraft, I collaborate with a talented group dedicated to creating forward-thinking digital products. My responsibilities include building user-friendly interfaces and ensuring smooth interactions that meet both usability and technical excellence. I've worked on assignments demanding efficient performance, clean architecture, and close coordination with diverse teams to deliver meaningful outcomes for end users.",
    },
    {
      id: 2,
      title: "Software Developer",
      company: "NexusLink Services Pvt Ltd",
      duration: "Feb 2023 - Feb 2024 / Ahemdabad, India",
      description:
        "Contributed to a client-facing application by implementing core functionality, including a QR-based access system for ticket purchases. Additionally, I built an interactive drag-and-drop interface, integrated user authentication mechanisms, and focused on improving load times and overall responsiveness for a smoother user experience.",
    },
    {
      id: 3,
      title: "Programmer Intern",
      company: "Radix Software Services Pvt Ltd",
      duration: "Feb - 2022 - Dec 2022 / Ahmedabad, India",
      description:
        "While interning at Radix, I contributed to building an educational web application using modern technologies like a JavaScript-based stack. Working alongside experienced engineers and peers, I helped construct different components of the system, aligning the work with company objectives. This opportunity deepened my knowledge of server-side logic, collaborative development, and the end-to-end process of creating scalable software.",
    },
  ];

  const [showLess, setShowLess] = useState<{ [key: number]: boolean }>({});

  const handlwShowMore = (id: number) => {
    setShowLess((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  console.log(showLess);
  return (
    <div className="py-20 lg:py-28">
      <div className="container lg:px-40">
        <SectionHeader
          title="My Work Experiences"
          eyebrow="Where I've Been Employed"
          description="My work experience so far."
        />

        <div className="mt-20">
          {expList.map((exp, idx) => (
            <div
              key={exp.id}
              className={`grid md:gap-8 grid-cols-1 md:grid-cols-4 mt-8 border-white/20 pb-4 ${
                expList.length !== exp.id && "border-b-2"
              }`}
            >
              <Fragment>
                <div className="md:col-span-2">
                  <div>
                    <h3 className="text-white text-lg font-semibold">
                      {exp.title}
                      <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-wider">
                        {" "}
                        {exp.company}
                      </span>
                    </h3>
                    <p className="text-sm text-white/70 py-2">{exp.duration}</p>
                  </div>
                </div>

                <div className="md:col-span-2 mt-2 md:mt-0 ">
                  <p
                    onClick={() => handlwShowMore(exp.id)}
                    className="text-sm text-white/70 tracking-wide"
                  >
                    {showLess[exp.id]
                      ? exp.description
                      : exp.description.slice(0, 120)}
                    <span className="text-white/30 cursor-pointer">
                      {" "}
                      {showLess[exp.id] ? "See Less..." : "See More..."}
                    </span>
                  </p>
                  {expList.length - 2 === exp.id && (
                    <div className="mt-3">
                      <span className="text-white/40 text-xs">
                        ~ collaborated with
                      </span>
                      <div>
                        <Team />
                      </div>
                    </div>
                  )}
                </div>
              </Fragment>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
