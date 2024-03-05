import React from "react";

function SelectGender() {
  return (
    <div className="flex flex-row gap-3 mt-2">
      <div className="">
        <label className="label ">
          Male
          <input
            type="radio"
            className="radio ml-2 border-solid border-gray-800"
            name="gender"
          />
        </label>
      </div>
      <div className="">
        <label className="label">
          Female
          <input
            type="radio"
            className="radio border-solid border-gray-800 ml-2"
            name="gender"
          />
        </label>
      </div>
    </div>
  );
}

export default SelectGender;
