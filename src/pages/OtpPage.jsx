import React from "react";
import FormField from "@components/FormFied";
import TextInput from "@components/FormInput/TextInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import OtpInput from "@components/FormInput/OtpInput";
const OtpPage = () => {
  const { control } = useForm();
  return (
    <div>
      <img className="mx-auto mb-8" src="/weconnect-logo.png" alt="" />
      <h3 className="mb-2 text-2xl font-medium text-dark-100">
        Two-Step Verification 💬
      </h3>
      <h6 className="mb-1 text-[15px] font-normal text-dark-100">
        We sent a verification code to your mobile. Enter the code from the
        mobile in the field below.
      </h6>
      <p className="mb-7 text-sm font-bold text-[#4B465C]">******9763</p>
      <form className="flex flex-col gap-4">
        <FormField
          control={control}
          label={"Type your 6 digit security code"}
          name={"otp"}
          value={"username"}
          Component={OtpInput}
        />
        <div className="mt-4">
          <Button className="w-full" variant="contained">
            Verify my account
          </Button>
        </div>
      </form>

      <p className="mt-4 text-center text-sm font-normal text-gray-400">
        Didn't get the code?
        <Link className="font-bold text-dark-100" to="/login">
          {" "}
          Resend
        </Link>
      </p>
    </div>
  );
};

export default OtpPage;
