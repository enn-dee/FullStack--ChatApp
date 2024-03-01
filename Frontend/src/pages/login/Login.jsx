import React from "react";

function Login() {
  return (
    <div className="flex flex-col gap-2 backdrop-filter backdrop-blur-lg bg-opacity-0 w-96 p-3 rounded-2xl  lg:w-96 md:w-70 max-w-xs ">
      <div className="font-semibold mx-auto text-3xl">
        Login <span className="text-sky-500 ">ChatApp</span>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col items-center w-full gap-2 px-2">
        <div className="w-full ">
          <label className="label text-xl">Username</label>
          <input
            type="text"
            placeholder="enn-dee"
            className="input input-bordered w-full "
          />
        </div>
        <div className="w-full ">
          <label className="label text-xl">Password</label>
          <input
            type="password"
            placeholder="length > 6"
            className="input input-bordered w-full"
          />
        </div>
        <a href="#" className="hover:text-blue-500 divider">
          Don't Have An Account?
        </a>
        <button className="btn btn-block hover:bg-green-600 hover:text-black">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
