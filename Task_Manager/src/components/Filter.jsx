import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <label htmlFor="filter">Filter by status:</label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default Filter;
