import FormField from "@components/FormFied";
import TextInput from "@components/FormInput/TextInput";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { control } = useForm();
  return (
    <div>
      <img className="mx-auto mb-8" src="/weconnect-logo.png" alt="" />
      <h3 className="mb-2 text-2xl font-medium text-dark-100">
        Register here 🚀
      </h3>
      <h6 className="mb-7 text-[15px] font-normal text-dark-100">
        Make your app management easy and fun!
      </h6>
      <form className="flex flex-col gap-4">
        <FormField
          control={control}
          label={"Username"}
          name={"username"}
          value={"username"}
          Component={TextInput}
        />
        <FormField
          control={control}
          label={"Email"}
          name={"Email"}
          value={"Email"}
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
        <div className="mt-4">
          <Button className="w-full" variant="contained">
            Sign up
          </Button>
        </div>
      </form>
      <p className="mt-4 text-center text-sm font-normal text-gray-400">
        Already have an account?{" "}
        <Link className="font-bold text-dark-100" to="/login">
          {" "}
          Sign in instead
        </Link>
      </p>
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

export default Register;
