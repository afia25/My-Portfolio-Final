import { PROJECTS } from "../constants";
import { useState } from "react";
import { animate, motion } from "framer-motion";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Show the first 3 projects if showAll is false, otherwise show all projects
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {displayedProjects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={project.image} 
                className="mb-6 rounded w-[150px] h-[100px] object-cover" 
                alt={project.title} 
              /></a>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}

        {/* Toggle button to show more or fewer projects */}
        {PROJECTS.length > 3 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 text-sm font-semibold text-purple-500 border border-purple-500 rounded hover:bg-purple-500 hover:text-white transition duration-200"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
