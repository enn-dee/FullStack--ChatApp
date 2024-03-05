import React from "react";
import { CiSearch } from "react-icons/ci";

function InputSearch() {
  return (
    <form className="w-96 flex flex-row justify-between p-2 items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-full input bordered h-8"
      />
      <button className="" type="submit">
        <CiSearch className="text-3xl text-cyan-400" />
      </button>
    </form>
  );
}

export default InputSearch;
