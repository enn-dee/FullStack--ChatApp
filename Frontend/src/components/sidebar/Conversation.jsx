import React from "react";

function Conversation() {
  return (
    <div className="flex flex-row justify-between items-center my-2 shadow-md  p-2 hover:bg-cyan-400 hover:text-black hover:cursor-pointer ">
      <div className="flex gap-3">
        <div class="avatar w-10 h-10 ">
          <div class=" rounded-full ">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="text-lg">Nadeem ahmad</div>
      </div>
      <div>😊</div>
    </div>
  );
}

export default Conversation;
