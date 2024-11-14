import React from "react";
import FormField from "@components/FormFied";
import TextInput from "@components/FormInput/TextInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  const { control } = useForm();
  return (
    <div>
      <img className="mx-auto mb-8" src="/weconnect-logo.png" alt="" />
      <h3 className="mb-2 text-2xl font-medium text-dark-100">
        Reset Password 🔒
      </h3>
      <h6 className="mb-7 text-[15px] font-normal text-dark-100">
        for john.doe@email.com
      </h6>
      <form className="flex flex-col gap-4">
        <FormField
          control={control}
          label={"New Password"}
          name={"New Password"}
          value={"New Password"}
          type="password"
          Component={TextInput}
        />

        <FormField
          control={control}
          label={"Confirm Password"}
          name={"Confirm Password"}
          value={"Confirm Password"}
          type="password"
          Component={TextInput}
        />
        <div className="mt-4">
          <Button className="w-full" variant="contained">
            Set New Password
          </Button>
        </div>
      </form>
      <div className="mx-auto mt-4 flex items-center justify-center text-center text-sm font-normal text-[#246AA3]">
        <div className="mr-2">
          <img className="h-[10px] w-[5px]" src="/Path.png" alt="" />
        </div>
        <div>
          <Link to="/login">Back to log in</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
