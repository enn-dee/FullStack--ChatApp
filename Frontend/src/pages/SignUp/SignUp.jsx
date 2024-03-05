import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import UseSignup from "../../hooks/UseSignup";
function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = UseSignup();
  const handleCheckboxChanger = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-400">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Alpha"
              className="input input-bordered h-10 w-full"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="alp_ha"
              className="input input-bordered h-10 w-full"
              value={inputs.username}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  username: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered h-10 w-full"
              value={inputs.password}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered h-10 w-full"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
          {/* gender */}
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChanger}
            selectedGender={inputs.gender}
          />
          <div>
            <Link
              to="/login"
              className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
            >
              Already have an account?
            </Link>
          </div>
          <div>
            <button className="btn btn-sm mt-3 btn-block" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

// starter code
// function SignUp() {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Sign Up <span className="text-blue-400">ChatApp</span>
//           </h1>
//           <form>
//             <div>
//               <label className="label p-2">
//                 <span className="label-text text-base">Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Alpha"
//                 className="input input-bordered h-10 w-full"
//               />
//             </div>
//             <div>
//               <label className="label p-2">
//                 <span className="label-text text-base">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="alp_ha"
//                 className="input input-bordered h-10 w-full"
//               />
//             </div>
//             <div>
//               <label className="label p-2">
//                 <span className="label-text text-base">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="input input-bordered h-10 w-full"
//               />
//             </div>
//             <div>
//               <label className="label p-2">
//                 <span className="label-text text-base">Confirm Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="input input-bordered h-10 w-full"
//               />
//             </div>
//             {/* gender */}
//             <GenderCheckbox/>
//             <div>
//               <a
//                 href="#"
//                 className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
//               >
//                 Already have an account?
//               </a>
//             </div>
//             <div>
//               <button className="btn btn-sm mt-3 btn-block">Sign Up</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   export default SignUp;
