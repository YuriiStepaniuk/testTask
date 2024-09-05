import React, { useState } from "react";
import SearchInput from "./UI/SearchInput";

const Filter = ({
  onFilter,
}: {
  onFilter: (column: string, query: string) => void;
}) => {
  const [column, setColumn] = useState("name");
  const [query, setQuery] = useState("");

  const handleColumnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColumn(e.target.value);
    onFilter(e.target.value, query);
  };

  const handleQueryChange = (query: string) => {
    setQuery(query);
    onFilter(column, query);
  };

  return (
    <div className="p-4 text-center">
      <p>
        To filter results, please choose the column <span> name</span> and start
        typing query
      </p>
      <label htmlFor="category" className="mr-4">
        Choose:{" "}
      </label>
      <select
        name="category"
        id="category"
        className="p-2 border-2 rounded-md"
        onChange={handleColumnChange}
      >
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>
      <SearchInput onQueryChange={handleQueryChange} />
    </div>
  );
};

export default Filter;
