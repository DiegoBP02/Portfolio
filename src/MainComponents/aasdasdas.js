import React, { useState } from "react";

const PortfolioSection = () => {
  // State to store the selected technology
  const [selectedTech, setSelectedTech] = useState("React");

  // Method to update the selected technology when the user makes a new selection
  const handleSelectionChange = (event) => {
    setSelectedTech(event.target.value);
  };

  // Render the appropriate list of projects based on the selected technology
  let projectsToRender;
  switch (selectedTech) {
    case "React":
      projectsToRender = reactProjects.map((project) => (
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.name} />
        </div>
      ));
      break;
    case "Node":
      projectsToRender = nodeProjects.map((project) => (
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.name} />
        </div>
      ));
      break;
    case "MERN":
      projectsToRender = mernProjects.map((project) => (
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.name} />
        </div>
      ));
      break;
    default:
      projectsToRender = null;
  }

  return (
    <div>
      <h2>My Projects</h2>
      {/* Dropdown menu or buttons to select the technology to view /}
<select value={selectedTech} onChange={handleSelectionChange}>
<option value="React">React</option>
<option value="Node">Node</option>
<option value="MERN">MERN</option>
</select>
{/ Render the list of projects for the selected technology */}
      {projectsToRender}
    </div>
  );
};

export default PortfolioSection;
