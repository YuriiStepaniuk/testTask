import React, { useRef } from "react";

const SearchInput = ({
  onQueryChange,
}: {
  onQueryChange: (query: string) => void;
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ref.current) {
      onQueryChange(ref.current.value);
    }
  };

  return (
    <input
      type="text"
      ref={ref}
      onChange={handleChange}
      className="border-2 rounded-md p-2 m-2 w-[280px]"
      placeholder="Start typing here..."
    />
  );
};

export default SearchInput;
