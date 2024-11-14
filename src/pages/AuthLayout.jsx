import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-dark-200 shadow-sm">
      <div className="h-fit w-[450px] rounded-md bg-white px-6 py-10">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
