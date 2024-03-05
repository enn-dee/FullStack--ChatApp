import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import { set } from "mongoose";
function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("char len > 3");
    }
    const converation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (converation) {
      setSelectedConversation(converation);
      setSearch("");
    } else {
      toast.error("No user found");
    }
  };
  return (
    <div>
      <form className="flex items-center gap-2 mt-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;

// STARTER CODE

/* 
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
function SearchInput() {
  return (
    <div>
      <form className="flex items-center gap-2 mt-2">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;

*/
