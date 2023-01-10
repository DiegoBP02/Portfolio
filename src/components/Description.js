import React from "react";

const SingleProject = ({ data }) => {
  return (
    <>
      {data.map((msg, index) => {
        const { feat, desc } = msg;
        return (
          <React.Fragment key={index}>
            {feat ? <p className="feat">{feat}</p> : null}
            {desc ? <p className="desc">{desc}</p> : null}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default SingleProject;
