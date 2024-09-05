import { useState } from "react";

import Filter from "./components/Filter";
import Table from "./components/Table";

function App() {
  const [filterParams, setFilterParams] = useState({
    column: "name",
    query: "",
  });

  const handleFilterChange = (column: string, query: string) => {
    setFilterParams({ column, query });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Filter onFilter={handleFilterChange} />
      <Table column={filterParams.column} query={filterParams.query} />
    </div>
  );
}

export default App;
