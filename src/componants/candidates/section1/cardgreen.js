import React from "react";

function Cardgreen({ role, name }) {
  return (
    <div className="bg-[#8CD87C] p-8 m-4 rounded-xl">
      <p className="p-8">
        {" "}
        “They took the time to really understand me as an individual and what I
        was looking for in my next move, this went beyond surface level trying
        to sell me a role and meant we had a great understanding of what
        mattered early on. Joey went above and beyond helping me both with
        preparation but also as an emotional support, which every candidate
        could do with when they really love the idea of a role. I can't
        recommend Joey and Toby enough from start to finish they have gone above
        and beyond. It&quot;s the first time I&quot;ve ever felt like a
        recruiter truly has my best interest at heart.”
      </p>
      <h3 className="py-4 text-2xl font-bold">
        {role} | <br />
        <span>{name}</span>
      </h3>
    </div>
  );
}

export default Cardgreen;
