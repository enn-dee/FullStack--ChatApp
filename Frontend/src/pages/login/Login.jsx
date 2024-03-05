import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500">ChatApp</span>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                value={username}
                type="text"
                placeholder="Enter Username"
                className="p-3 w-full input input-bordered h-10"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                value={password}
                type="password"
                placeholder="Enter Password"
                className="p-3 w-full input input-bordered h-10"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link
              to="/signup"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Don't have an account?
            </Link>
            <div>
            <button className="btn btn-sm mt-3 btn-block" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

//Starter code for this file
// function Login() {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <div className="text-3xl font-semibold text-center text-gray-300">
//             Login
//             <span className="text-blue-500">ChatApp</span>
//             <form>
//               <div>
//                 <label className="label p-2">
//                   <span className="text-base label-text">Username</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Username"
//                   className="p-3 w-full input input-bordered h-10"
//                 />
//               </div>
//               <div>
//                 <label className="label p-2">
//                   <span className="text-base label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Enter Password"
//                   className="p-3 w-full input input-bordered h-10"
//                 />
//               </div>
//               <a
//                 href="#"
//                 className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//               >
//                 Don't have an account?
//               </a>
//               <div>
//                 <button className="btn btn-sm mt-3 btn-block ">Login</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   export default Login;
