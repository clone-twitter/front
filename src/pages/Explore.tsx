import React from "react";


const Explore = () => {
  return (
    <div className="explorer">
      <div className="explorer__header">
        <h1>Explorer</h1>
      </div>
      <div className="explorer__content">
        <div className="explorer__content__search">
          <input type="text" placeholder="Search Twitter" />
        </div>
        <div className="explorer__content__trends">
          <h2>Trends for you</h2>
        </div>
      </div>
    </div>
  );
};

export default Explore;