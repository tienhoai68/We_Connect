import FormField from "@components/FormFied";
import TextInput from "@components/FormInput/TextInput";
import { Button } from "@mui/material";
import { login } from "@redux/slices/authSlices";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Login = () => {
  const { control } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      login({ accessToken: "accessToken", refreshToken: "refreshToken" }),
    );
  }, []);
  return (
    <div>
      <img className="mx-auto mb-8" src="/weconnect-logo.png" alt="" />
      <h3 className="mb-2 text-2xl font-medium text-dark-100">
        Welcome to WeConnect! 👋
      </h3>
      <h6 className="mb-7 text-[15px] font-normal text-dark-100">
        Please sign in to your account and start the adventure
      </h6>
      <form className="flex flex-col gap-4">
        <FormField
          control={control}
          label={"Email or Username"}
          name={"username"}
          value={"username"}
          Component={TextInput}
        />

        <FormField
          control={control}
          label={"Password"}
          name={"Password"}
          value={"Password"}
          type="password"
          Component={TextInput}
        />

        <Link
          to={"/forgot-password"}
          className="text-right text-xs font-normal text-gray-400"
        >
          Forgot Password?
        </Link>
        <div className="mt-4">
          <Button className="w-full" variant="contained">
            Sign in
          </Button>
        </div>
      </form>
      <div className="my-6 flex items-center gap-7">
        <p className="h-[1px] w-[160px] border border-gray-400" />
        <span className="h-5 w-[13px] text-center text-xs font-normal text-gray-400">
          or
        </span>
        <p className="h-[1px] w-[160px] border border-gray-400" />
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="relative">
          <img src="/background.png" alt="" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/fb.png" alt="" />
          </div>
        </div>
        <div className="relative">
          <img src="/background.png" alt="" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/twitter.png" alt="" />
          </div>
        </div>
        <div className="relative">
          <img src="/background.png" alt="" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/google.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
