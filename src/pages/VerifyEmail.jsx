import React from "react";
import FormField from "@components/FormFied";
import TextInput from "@components/FormInput/TextInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const VerifyEmail = () => {
  const { control } = useForm();
  return (
    <div>
      <img className="mx-auto mb-8" src="/weconnect-logo.png" alt="" />
      <h3 className="mb-2 text-2xl font-medium text-dark-100">
        Verify your email ✉️
      </h3>
      <h6 className="mb-7 text-[15px] font-normal text-dark-100">
        Account activation link sent to your email address: hello@example.com
        Please follow the link inside to continue.
      </h6>

      <div className="mt-4">
        <Button className="w-full" variant="contained">
          Skip for now
        </Button>
      </div>
      <p className="mt-4 text-center text-sm font-normal text-gray-400">
        Didn't get the mail?
        <Link className="font-bold text-dark-100" to="/login">
          {" "}
          Resend
        </Link>
      </p>
    </div>
  );
};

export default VerifyEmail;
