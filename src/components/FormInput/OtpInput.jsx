import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
const OtpInput = ({ value, onChange }) => {
  return (
    <div>
      <MuiOtpInput length={6} value={value} onChange={onChange} />
    </div>
  );
};

export default OtpInput;
