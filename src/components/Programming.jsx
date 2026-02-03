import { PROGRAMMING } from "../constants";
import { useState } from "react";
import { animate, motion } from "framer-motion";

const Programming = () => {
  const [showAll, setShowAll] = useState(false);

  // Show the first 3 contests if showAll is false, else show all contests
  const displayedContests = showAll ? PROGRAMMING : PROGRAMMING.slice(0, 3);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Programming</h2>
      <div>
        {displayedContests.map((contest, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{contest.year}</p>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-4 font-bold text-purple-100">{contest.description}</h6>
              <h6 className="mb-2 font-semibold">
                <span className="text-sm text-neutral-400">Team Name: {contest.team_name}</span><br />
                <span className="text-sm text-neutral-400">Rank: {contest.rank}</span>
              </h6>
            </motion.div>
          </div>
        ))}

        {/* Button to toggle between showing all or first three contests */}
        {PROGRAMMING.length > 3 && (
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

export default Programming;
