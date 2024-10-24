import { Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

const InputPassword = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack
      direction="row"
      alignItems={"center"}
      sx={{
        width: "95%",
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        padding: "0 16px",
      }}
    >
      <input
        {...props}
        type={showPassword ? "text" : "password"}
        style={{
          width: "100%",
          color: "#93767A",
          border: "none",
          outline: "none",
          padding: "10px 0",
          fontSize: "16px",
        }}
      />

      {showPassword ? (
        <VisibilityIcon
          sx={{ width: "24px", color: "#93767A", cursor: "pointer" }}
          onClick={() => setShowPassword(false)}
        />
      ) : (
        <VisibilityOffIcon
          sx={{ width: "24px", color: "#93767A", cursor: "pointer" }}
          onClick={() => setShowPassword(true)}
        />
      )}
    </Stack>
  );
};

export default InputPassword;
