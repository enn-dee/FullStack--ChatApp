import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Conversations from "../../components/Sidebar/Conversations";
import MessageContainer from "../../components/messages/MessageContainer";


function Home() {
  return (
    <div className="flex flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-0">
      <Sidebar />
      <MessageContainer/>
    </div>
  );
}

export default Home;
