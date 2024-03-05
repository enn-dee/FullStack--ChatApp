import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

function userLogout() {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
      //   show logout toast to user
    //   toast.promise(saveSettings(settings), {
    //     loading: "Loging Out...",
    //     success: <b>Loged out</b>,
    //     error: <b>Failed to logout</b>,
    //   });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {loading, logout}
}

export default userLogout;
