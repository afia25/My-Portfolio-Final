import { PUBLICATIONS } from "../constants";
import { useState } from "react";
import { animate, motion } from "framer-motion";

const Publication = () => {
  const [showAll, setShowAll] = useState(false);

  // Show the first 3 publications if showAll is false, otherwise show all publications
  const displayedPublications = showAll ? PUBLICATIONS : PUBLICATIONS.slice(0, 3);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Publications</h2>
      <div>
        {displayedPublications.map((publication, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{publication.year}</p>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-4 font-bold text-purple-100">Title: {publication.description}</h6>
              <h6 className="mb-2 font-semibold">
                <span className="text-sm text-neutral-400">Publisher: {publication.publisher}</span><br />
                <span className="text-sm text-neutral-400">Journal: {publication.journal}</span><br />
                <span className="text-sm text-neutral-400">Role: {publication.role}</span><br />
                <span className="text-sm text-neutral-400">Scopus Index: {publication.scopus_index}</span><br />
                <span className="text-sm text-neutral-400">Impact Factor: {publication.impact_factor}</span><br />
                {/* Only show submitted_paper for 2nd paper (index === 1) */}
                {index === 1 && (
                  <span className="text-sm text-neutral-400">Submitted Paper: {publication.submitted_paper}</span>
                )}
              </h6>

              {/* Only show link for 1st paper (index === 0) */}
              {index === 0 && (
              <h6 className="mb-2 font-semibold">
                <span className="text-sm text-neutral-400">
                  Paper Link: <a href={publication.link} target="_blank" rel="noopener noreferrer"><u>{publication.link}</u></a>
                </span>
              </h6>
              )}
            </motion.div>
          </div>
        ))}

        {/* Toggle button to show more or fewer publications */}
        {PUBLICATIONS.length > 20 && (
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

export default Publication;
